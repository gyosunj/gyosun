'use strict';
YeSeul.entree.blogs = new YeSeul.entree();
YeSeul.entree.blogs.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;
  if (thisName === 'Deleted Blogs') {
    trash = 1;
  }
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





















