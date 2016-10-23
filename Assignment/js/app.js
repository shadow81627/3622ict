var app = angular.module("app", ["ngRoute"]);

var controllers = {};
var facebook = {};

window.fbAsyncInit = function() {
    FB.init({
      appId      : facebook.APP_ID,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
controllers.loginController = function($scope) {

  $scope.loginURL = facebook.loginURL;

  $scope.login = facebook.getToken();
};

app.controller(controllers);