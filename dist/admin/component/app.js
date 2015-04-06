'use strict';
YeSeul.restaurant.firebase = 'https://gyosun.firebaseio.com/';
YeSeul.restaurant.ref = new Firebase(YeSeul.restaurant.firebase);
YeSeul.restaurant.owner = YeSeul.restaurant.ref.getAuth();

// YeSeul.authData = YeSeul.restaurant.owner //temp

// Temeplate Engine: Mustache
// TODO: create my own template engine
YeSeul.dessert.mustache = function (path, arr, target) {
  if (path && target) {
  	var data;
  	if (arr && typeof arr != 'undefined' && typeof arr != undefined && arr.length){
  		data = {items: arr} // 'items' must match with 'Sections Render Block' name {{#items}} ... {{/items}}
  	} else {
  		data = arr
  	};
    $.get(path, function(template) {
    var rendered = Mustache.render(template, data);
      $(target).html(rendered);
    });
  } else {
    console.error('path is "' + path + '" and ' + 'target is "' + target + '"');
  }
};

// Layout Fn: Mustache
YeSeul.menu.prototype.layout = function () {
  if (this.layoutRoute) {
    var obj = this.layoutRoute;
    var i;
    for (i in obj) {
      if (obj[i].run) {
        YeSeul.dessert.mustache(obj[i].path, obj[i].data(), obj[i].target);
      }
    }
  } else {
    console.error('No layoutRoute')
  }
};

// Firebase Services
YeSeul.entree.prototype.firebase = {
	childName: function () {
		if (this.dbName){
			return this.dbName
		} else {
			console.error('Child Name is NULL')
		}
	},
  loadingIcon: function () {
    return $('#loadingIcon');
  },
  loadData: function (num) {
    if (YeSeul.restaurant.ref) {
      var thisRef = YeSeul.restaurant.ref.child(this.childName());
      var deferred = $.Deferred();
      var result = [];
      // num: 1 = deleted item or 0 = not deleted item
      if (typeof num === 'number'){
        if (num === 1 || num === 0) {
          thisRef.orderByChild('trash').equalTo(num).once('value', function (s) {
            s.forEach(function (i) {
              var item = i.val();
              item.key = i.key();
              result.push(item)
            })
            deferred.resolve(result);
          });
        } else {
          console.error("Number parameter can't be other than 1(deleted item) or 0");
        }      	
      } else {
      	thisRef.once('value', function (s) {
	        s.forEach(function (i) {
	          var item = i.val();
	          item.key = i.key();
	          result.push(item)
	        })
	        deferred.resolve(result);
	      });
      };
      if (deferred.state() === "pending" ){
        this.loadingIcon().show();
      }
      return deferred.promise()
    } else {
      console.error('no Data Reference')
    }
  },
  loadDatum: function (key) {
		var thisRef = YeSeul.restaurant.ref.child(this.childName());
		var deferred = $.Deferred();
		if (key) {
			thisRef.once('value', function (s) {
				var result = s.child(key).val();
        result.key = s.child(key).key();
        deferred.resolve(result);
      });
		} else {
			var result = {};
			deferred.resolve(result);
		};
    if (deferred.state() === "pending" ){
      this.loadingIcon().show();
    }
    return deferred.promise()
  },
  updateDatum: function (input, key) {
    var thisRef = YeSeul.restaurant.ref.child(this.childName()).child(key);
    thisRef.update(input);
  },
  createDatum: function (input) {
    var thisRef = YeSeul.restaurant.ref.child(this.childName());
    thisRef.push(input);
  },
  deleteDatum: function (key) {
	  var thisRef = YeSeul.restaurant.ref.child(this.childName()).child(key);
  	thisRef.remove(YeSeul.entree.doneCallback);
  },
  sendDatumToTrash: function (key) {
    var input = {trash: 1} 
    this.updateDatum(input, key)
  },
  recoverDatum: function (key) {
    var input = {trash: 0} 
    this.updateDatum(input, key)
  }
};

YeSeul.entree.generic = new YeSeul.entree();
YeSeul.entree.generic.Ctrl = function (route) {
  var thisName = route.thisName;
  this.pageTitle = thisName;

  var arr;
  YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
}

// Creating Blog Class
// YeSeul.appetizerBlog = new YeSeul.appetizer;
// YeSeul.appetizerBlog.class = (function() {
//   var cached_function = YeSeul.appetizerBlog.PostClass;

//   return function() {
//     cached_function.apply(this, arguments);

//     var _category;
//     Object.defineProperty(this, 'category', {
//       get: function () { return _category; },
//       set: function (value) { _category = value; },
//       enumerable: true
//     });

//     var _tag;
//     Object.defineProperty(this, 'tag', {
//       get: function () { return _tag; },
//       set: function (value) { _tag = value; },
//       enumerable: true
//     });
//   }    
// }());

// Repository
// YeSeul.appetizerBlog.repo = function (val) {
//   var _repo = new YeSeul.appetizerBlog.class();
//   var checking = function (val) {var _val; val? _val = val: _val = ''; return _val;}
//   _repo.id = checking(val.key);
//   _repo.title = checking(val.title);
//   _repo.author = checking(val.author);
//   _repo.excerpt = checking(val.excerpt);
//   _repo.content = checking(val.content);
//   _repo.createdby = checking(val.createdby);
//   _repo.updatedby = checking(val.updatedby);
//   _repo.createdat = checking(val.createdat);
//   _repo.updatedat = checking(val.updatedat);
//   _repo.category = checking(val.category);
//   _repo.tag = checking(val.tag);
//   _repo.trash = checking(val.trash);
//   return _repo
// }