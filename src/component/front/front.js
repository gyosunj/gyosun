'use strict';
YeSeul.entree.front = new YeSeul.entree();
YeSeul.entree.front.ctrl = function (route) {
  var thisName = route.thisName;
  this.pageTitle = thisName;




	var arr;
	YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
};

