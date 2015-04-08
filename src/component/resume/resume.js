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