'use strict';
YeSeul.entree.contact = new YeSeul.entree();
YeSeul.entree.contact.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;

  // YeSeul.entree.contact.firebase.dbName = 'contact';
  // YeSeul.entree.contact.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
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

YeSeul.wine.contact = new YeSeul.wine();
YeSeul.wine.contact = function () {

};