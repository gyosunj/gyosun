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