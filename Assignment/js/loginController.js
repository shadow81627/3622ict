app.controller('LoginController', function($scope, $location, FacebookService) {

  if(FacebookService.status === 'connected'){
    $scope.content = function () {
      $location.path( '/content' );
    };
  }else{
    console.log('memes')
  }
  
  
});