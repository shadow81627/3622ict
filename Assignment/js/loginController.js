app.controller('LoginController', function($scope, $location, $window) {
    
    //$scope.login= facebookFactory;
    /*
    if(facebook.status === 'connected'){
        $location.path( '/content' );
    }else {
        $location.path( '/splash' );
    }*/
    
    $window.fbAsyncInit = function() {
        FB.init({ 
          appId: '342478882810704',
          status: true, 
          cookie: true, 
          xfbml: true,
          version: 'v2.8'
        });
        
    facebook.FBLogin = function() {
      FB.getLoginStatus(function(response) {
        if (response.authResponse) {
         $location.path( '/content' );
         console.log('Welcome!  Fetching your information.... ');
         //get the name of the logged in user
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
         
         FB.api('/815157038515764', {fields: 'description, albums'}, function(response) {
           //get the description of the DMS travel page
           console.log(response.description);
           facebook.description = response.description;
           //get the albums
           facebook.albums =response.albums;
           facebook.destinations = [];
           
           for(var i = 0; i < facebook.albums.data.length; i++){
            console.log(facebook.albums.data[i]);
            //get the album by id
            FB.api('/'+ facebook.albums.data[i].id, {fields: 'location'}, function(response) {
              //if the album location contains the word Australia then add it to destinations
              //console.log(response);
              if(response.location != "" && response.location.includes("Australia")){
                facebook.destinations.push(response);
                console.log("stuff");
              }else{
                facebook.albums.data[i].pop();
              }
            });
           }
           console.log(facebook.destinations);
           console.log(facebook.albums.data)
         });
        } else {
            //the user is not logged in so take them to the log in page
         console.log('User cancelled login or did not fully authorize.');
         $location.path( '/splash' );
        }
      });
    };
    facebook.status = FB.getLoginStatus();
    };
    
    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   

});