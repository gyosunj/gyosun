'use strict';
YeSeul.entree.dashboard = new YeSeul.entree();
YeSeul.entree.dashboard.ctrl = function (route) {
  var thisName = route.thisName;

  var finalData;
  YeSeul.dessert.mustache (route.renderTemplate, finalData, route.renderTarget)
};