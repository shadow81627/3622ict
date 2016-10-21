var app = angular.module("app", ["ngRoute"]);
var controllers = {};

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "Views/splash.html"
    })
    .when("/splash", {
      templateUrl : "Views/content.html"
    })
    .otherwise({
        templateUrl : "Views/splash.html"
    });
});

controllers.loginController = function($scope) {
  var APP_ID = "342478882810704";
  var APP_URL = "https://s5014219-s5014219.c9users.io/3622ICT/Assignment/";
  $scope.loginURL = "https://www.facebook.com/dialog/oauth?client_id=" + APP_ID + "&redirect_uri=" + APP_URL + "&response_type=token";
};

app.controller(controllers);