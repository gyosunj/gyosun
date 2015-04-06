'use strict';
YeSeul.entree.auth = new YeSeul.entree();
YeSeul.entree.auth.ctrl = function (route) {
  if (route.thisName === 'Login') {
    if (YeSeul.restaurant.owner != null){
      window.location = "/admin/#dashboard/"
    } else {
      var thisName = route.thisName;
      this.pageTitle = thisName;

      YeSeul.entree.auth.btnSignIn = function () {
        var id = $('#inputEmail').val();
        var pw = $('#inputPassword').val();
        YeSeul.restaurant.ref.authWithPassword({
          email    : id,
          password : pw
        }, authHandler);
        function authHandler(error, authData) {
          if (error) {
            alert("Login Failed!");
          } else {
            window.location = "/admin/#dashboard/"
          }
        };
      }

      var finalData;
      YeSeul.dessert.mustache (route.renderTemplate, finalData, route.renderTarget);
    }
  } else {
    
  }
};

