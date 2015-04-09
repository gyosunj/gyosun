'use strict';
YeSeul.entree.resumes = new YeSeul.entree();
YeSeul.entree.resumes.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;
  if (thisName === 'Deleted Resumes') {
    trash = 1;
  }
  YeSeul.entree.resumes.firebase.dbName = 'resumes';

  YeSeul.entree.resumes.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
    .then(function ( arr ) {
      // TODO: arr.sort => custom order fn
      arr.reverse()
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};

// Detail view controller
YeSeul.entree.resume = new YeSeul.entree();
YeSeul.entree.resume.ctrl = function (route, key) {
  var thisName = route.thisName;
  this.pageTitle = thisName;

  YeSeul.entree.resumes.firebase.dbName = 'resumes';
  YeSeul.entree.resumes.firebase.loadDatum(key)
    .then(function ( arr ) {
      arr.thisName = thisName;
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};