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

controllers.loginController = function($scope, facebook) {
  $scope.loginURL = facebook.loginURL;
  
};

app.controller(controllers);