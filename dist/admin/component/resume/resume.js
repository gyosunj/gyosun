'use strict';
YeSeul.entree.resumes = new YeSeul.entree();
YeSeul.entree.resumes.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;
  if (thisName === 'Deleted resumes') {
    trash = 1;
  }
  YeSeul.entree.resumes.firebase.dbName = 'resumes';

  // YeSeul.entree.resumes.firebase.createDatum({
  //   'period': '10 / 2013 ~ Current',
  //   'responsibility': ['Brand Identity, UI/UX Design, FrontEnd Development'],
  //   'client': 'Perr&Knight',
  //   'related': ['perrknight.com', 'ratefilings.com', 'statefilings.com'],
  //   'title': 'Cras id dui. Duis lobortis massa.',
  //   'article': 'Cras varius. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Sed libero. Suspendisse potenti.',
  //   'img': 'pk02.jpg',
  //   'trash': 0
  // });

  YeSeul.entree.resumes.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
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
YeSeul.entree.resume = new YeSeul.entree();
YeSeul.entree.resume.ctrl = function (route, key) {
  var thisName = route.thisName;
  this.pageTitle = thisName;

  // YeSeul.entree.resumes.firebase.dbName = 'resumes';
  // YeSeul.entree.resumes.firebase.loadDatum(key)
  //   .then(function ( arr ) {
  //     arr.thisName = thisName;
  //     YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
  //   })
  //   .done(function () { })
  //   .fail(function () {
  //     console.error (this + ' :failed.');
  //   });
};