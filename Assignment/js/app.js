var app = angular.module("app", ["ngRoute"]);

var controllers = {};
var facebook = {};

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

  $scope.loginURL = facebook.loginURL;

  $scope.login = facebook.getToken();
};

app.controller(controllers);