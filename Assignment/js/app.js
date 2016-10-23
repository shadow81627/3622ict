var app = angular.module("app", ["ngRoute"]);

var controllers = {};
var facebook = {};

controllers.loginController = function($scope) {

  $scope.loginURL = facebook.loginURL;

  $scope.login = facebook.getToken();
};

app.controller(controllers);