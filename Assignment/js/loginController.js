app.controller('LoginController', function($scope, $location) {

    $scope.FBLogin = function() {
        $location.path( '/content' );
        /*FB.login(function(response) {
            if (response.authResponse) {
                $location.path( '/content' );
             console.log('Welcome!  Fetching your information.... ');
             FB.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });*/
    };

});