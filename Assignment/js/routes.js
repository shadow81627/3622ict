app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "Views/splash.html"
    })
    .when("/content", {
      templateUrl : "Views/content.html"
    })
    .when("/design", {
      templateUrl : "Views/design.html"
    })
    .when("/about", {
      templateUrl : "Views/about.html"
    })
    .when("/thumbnail", {
      templateUrl : "Views/thumbnail.html"
    })
    .otherwise({
        templateUrl : "Views/splash.html"
    });
});