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