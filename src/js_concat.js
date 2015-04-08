var YeSeul = {};
(function(YeSeul, window, document, $) {
  'use strict';
  // for browsers not support 'Object.create'
  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      var F = function () {};
      F.prototype = o;
      return new F();
    };
  }
  // for browsers not support 'Object.create'
  var _this; 
  var collection = {
    VERSION: '0.0.1'
  };
  _this = collection;
  window.YeSeul = $.extend(YeSeul, collection)
})(YeSeul, window, document, window.jQuery);

// utility
YeSeul.ingredient = {
  currentUrl: function () {
    var url = window.location.href.toString().split(window.location.host)[1];
    return url.toString();
  },
  punchClock: {
    _this: this.YeSeul,
    getNow: function () {
      return new Date();
    },
    year: function () {
      var year = this.getNow().getFullYear();
      return year.toString();
    },
    month: function () {
      var month = this.getNow().getMonth() + 1;
      return this._this.ingredient.padLeft(month, 2);
    },
    monthName: function () {
      var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mS = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      var month = this.getNow().getMonth();
      return mL[month];
    },
    date: function () {
      var date = this.getNow().getDate();
      return this._this.ingredient.padLeft(date, 2);
    },
    day: function () {
      var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      var day = this.getNow().getDay();
      return dayName[day];
    },
    hour: function () {
      var hour = this.getNow().getHours();
      return this._this.ingredient.padLeft(hour, 2);
    },
    min: function () {
      var min = this.getNow().getMinutes();
      return this._this.ingredient.padLeft(min, 2);
    },
    sec: function () {
      var sec = this.getNow().getSeconds();
      return this._this.ingredient.padLeft(sec, 2);
    },
    now: function (o) {
      var now = {
        fDateTime: this.year() + this.month() + this.date() + this.hour() + this.min() + this.sec(),
        year: this.year(),
        month: this.month(),
        monthName: this.monthName(),
        date: this.date(),
        hour: this.hour(),
        min: this.min(),
        sec: this.sec(),
        day: this.day()
      }
      return now;
    }
  },
  padLeft: function (str, max){
    if(str != 'undefined' && max != 'undefined')
    {
      str = str.toString(); 
      function main(str,max){ 
        return str.length < max ? main("0" + str, max) : str; 
      } 
      return main(str,max);
    } else {
      return 'error'
    }
  },
  objLength: function (obj) {
    var length = 0;
    for( var key in obj ) {
      if( obj.hasOwnProperty(key) ) {
        ++length;
      }
    }
    return length;
  },
  orderBy: function (order, prop1, prop2) {
    //TODO: make it dynamic: number of properties
    var _order = order.toUpperCase();
    if (_order === 'DESC') {
      _order = -1;
    } else {
      _order = 1;
    }
    return function (a, b) {
      var result = (a[prop1][prop2] < b[prop1][prop2]) ? -1 : (a[prop1][prop2] > b[prop1][prop2]) ? 1 : 0;
      return result * _order;
    };
  }
};

YeSeul.restaurant = {}; // constant

YeSeul.menu = function() {}; // route
YeSeul.menu.prototype.run = function () {
  this.init();
}
YeSeul.menu.prototype.init = function () {
  var _this = this;
  var path, hash;
  $(document).ready(function () {
    path = document.location.pathname;
    hash = window.location.hash;
    _this.changeRoute(hash || path);
  })

  $(window).on('hashchange', function() {
    hash = window.location.hash;
    _this.changeRoute(hash);
  });
}
YeSeul.menu.prototype.changeRoute = function(param) {
  switch(param) {
    case '':
    $(this.route.empty.renderTarget).text(param);
      break;
    default:
      $(this.route.empty.renderTarget).text(param);
  }
}
YeSeul.menu.prototype.route = {
  empty: { 
    thisName: 'index',
    renderTemplate: '',
    renderTarget: 'html',
    onNav: false
  }
}

YeSeul.appetizer = function() {}; // class
YeSeul.appetizer.prototype.PostClass = function (param1) {

  var _id;
  Object.defineProperty(this, 'id', {
    get: function () { return _id; },
    set: function (value) { _id = value; },
    enumerable: true
  });

  var _title;
  Object.defineProperty(this, 'title', {
    get: function () { return _title; },
    set: function (value) { _title = 'test'; },
    enumerable: true
  });

  var _excerpt;
  Object.defineProperty(this, 'excerpt', {
    get: function () { return _excerpt; },
    set: function (value) { _excerpt = value; },
    enumerable: true
  });

  var _content;
  Object.defineProperty(this, 'content', {
    get: function () { return _content; },
    set: function (value) { _content = value; },
    enumerable: true
  });

  var _createdby;
  Object.defineProperty(this, 'createdby', {
    get: function () { return _createdby; },
    set: function (value) { _createdby = value; },
    enumerable: true
  });

  var _updatedby;
  Object.defineProperty(this, 'updatedby', {
    get: function () { return _updatedby; },
    set: function (value) { _updatedby = value; },
    enumerable: true
  });

  var _createdat;
  Object.defineProperty(this, 'createdat', {
    get: function () { return _createdat; },
    set: function (value) { _createdat = value; },
    enumerable: true
  });

  var _updatedat;
  Object.defineProperty(this, 'updatedat', {
    get: function () { return _updatedat; },
    set: function (value) { _updatedat = value; },
    enumerable: true
  });

  var _trash;
  Object.defineProperty(this, 'trash', {
    get: function () { return _trash; },
    set: function (value) { _trash = value; },
    enumerable: true
  });
}

YeSeul.entree = function () {}; // controller
YeSeul.entree.doneCallback = function(error) {
  if (error) {
    alert('failed');
  } else {
    alert('succeeded');
  }
};

YeSeul.dessert = function () {}; // template engine

YeSeul.wine = function () {}; // DOM manipulation

// console.log(window)


'use strict';
YeSeul.restaurant.firebase = 'https://gyosun.firebaseio.com/';
YeSeul.restaurant.ref = new Firebase(YeSeul.restaurant.firebase);
YeSeul.restaurant.owner = YeSeul.restaurant.ref.getAuth();

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



'use strict';
YeSeul.entree.blogs = new YeSeul.entree();
YeSeul.entree.blogs.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;

  YeSeul.entree.blogs.firebase.dbName = 'blogs';
  YeSeul.entree.blogs.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
    .then(function ( arr ) {
      arr.sort(YeSeul.ingredient.orderBy('desc', 'updatedat', 'fDateTime'));
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};

// Detail view controller
YeSeul.entree.blog = new YeSeul.entree();
YeSeul.entree.blog.ctrl = function (route, key) {
  var thisName = route.thisName;
  this.pageTitle = thisName;

  YeSeul.entree.blogs.firebase.dbName = 'blogs';
  YeSeul.entree.blogs.firebase.loadDatum(key)
    .then(function ( arr ) {
      arr.thisName = thisName;
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};

// YeSeul.appetizerBlog = new YeSeul.appetizer;
// // Adding more classes
// YeSeul.appetizerBlog.PostClass = (function() {
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
// // Repository
// YeSeul.appetizerBlog.repo = function (val) {
//   var _repo = new YeSeul.appetizerBlog.PostClass();
//   var checking = function (val) {var _val; val? _val = val: _val = ''; return _val;}
//   _repo.id = checking(val.id);
//   _repo.key = checking(val.key);
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
// // List view controller
// YeSeul.wine.blogs = new YeSeul.wine();
// YeSeul.wine.blogs = function (route) {
//   var profile = route;
//   var template = profile.renderTemplate,
//     target = profile.renderTarget;

//   var items = new YeSeul.entree();
//   var ref = items.ref().child('blogs');

//   var loadBlogs = (function () {
//     ref.once('value', function(snapshot) {
//       var dataObj = snapshot.val();
//       var arr = [];
//       $.each(dataObj, function (key, val) {
//         val.key = key;
//         var singleObj = val;
//         var result = YeSeul.appetizerBlog.repo(singleObj);
//         arr.push(result);
//       })

//       arr.sort(YeSeul.ingredient.orderBy('desc', 'updatedat', 'fDateTime'));

//       var finalData = {items: arr} // 'items' must match with 'Sections Render Block' name {{#items}} ... {{/items}}
//       items.render(template, finalData, target)
//     }, function (errorObject) {
//       console.log("The read failed: " + errorObject.code);
//     });
//   }());
// }
// // Detail view controller
// YeSeul.wine.blog = new YeSeul.wine();
// YeSeul.wine.blog = function (route, key) {
//   var profile = route;
//   var template = profile.renderTemplate,
//     target = profile.renderTarget;

//   var items = new YeSeul.entree();
//   var ref = items.ref().child('blogs');

//   var loadBlog = (function () {
//     ref.once('value', function(snapshot) {
//       var val = snapshot.child(key).val();
//       if (!val) {
//         window.location = "/#404"
//         return false;
//       }
//       val.key = key;
//       var singleObj = val;
//       var finalData = YeSeul.appetizerBlog.repo(singleObj);
//       items.render(template, finalData, target)
//     }, function (errorObject) {
//       console.log("The read failed: " + errorObject.code);
//     });
//   }());
// }






















'use strict';
YeSeul.entree.resumes = new YeSeul.entree();
YeSeul.entree.resumes.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;

  YeSeul.entree.resumes.firebase.dbName = 'resumes';
  YeSeul.entree.resumes.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
    .then(function ( arr ) {
      // arr.sort(YeSeul.ingredient.orderBy('desc', 'updatedat', 'fDateTime'));
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};
'use strict';
YeSeul.menuGyosun = new YeSeul.menu();
YeSeul.menuGyosun.layoutRoute = {
  renderHeader: {
    run: false,
    path: './templates/partials/header.mst', 
    data: function() {
      var data;
      return data;
    },
    target: '#renderedHeader'
  },
  renderSidebar: {
    run: false,
    path: '', 
    data: function() {
      var data;
      return data;
    },
    target: ''
  },
  renderFooter: {
    run: false,
    path: './templates/partials/footer.mst', 
    data: function () {
      var data = {};
      return data;
    },
    target: '#renderedFooter'
  },
  renderSidebar: {
    run: true,
    path: './templates/partials/nav.mst', 
    data: function () {
      var data = {};
      data.year = YeSeul.ingredient.punchClock.year();
      data.monthName = YeSeul.ingredient.punchClock.monthName();
      return data;
    },
    target: '#renderedNav'
  },
};
YeSeul.menuGyosun.changeRoute = function(param) {
  switch(param) {
    case '':
      YeSeul.entree.resumes.ctrl(this.route.resumes);
      break;
    case '/':
      YeSeul.entree.resumes.ctrl(this.route.resumes);
      break;
    case '#blog':
      YeSeul.entree.blogs.ctrl(this.route.blogs);
      break;
    case '#blog' + param.slice('#blog'.length):
      var key = param.slice('#blog/?id='.length);
      YeSeul.entree.blog.ctrl(this.route.blog, key);
      break;
    default:
      YeSeul.entree.generic.Ctrl(this.route.fourofour); // TODO: need to create a generic ctrl
      break;
  }
};
YeSeul.menuGyosun.route = {
  'fourofour': { thisName: '404',
    renderTemplate: '../templates/404.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'resumes': { thisName: 'Resume',
    renderTemplate: '../component/resume/resume.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogs': { thisName: 'Blogs',
    renderTemplate: '../component/blog/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
  'blog': { thisName: 'Blog',
    renderTemplate: '../component/blog/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
};

YeSeul.menuGyosun.layout();
YeSeul.menuGyosun.run();
