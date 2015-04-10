'use strict';
YeSeul.entree.works = new YeSeul.entree();
YeSeul.entree.works.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;

  // YeSeul.entree.works.firebase.dbName = 'works';
  // YeSeul.entree.works.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
  //   .then(function ( arr ) {
  //     arr.reverse();
  //     // TODO: arr.sort => custom order fn
  //     YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
  //   })
  //   .done(function () { })
  //   .fail(function () {
  //     console.error (this + ' :failed.');
  //   });
  var arr = [];
  YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
};

YeSeul.wine.works = new YeSeul.wine();
YeSeul.wine.works = function () {

};