$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
        appId      : '342478882810704',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.5
    });
    facebook.FBLogin = function() {
      FB.getLoginStatus(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         window.location = window.location.href + "content";
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
         console.log('User cancelled login or did not fully authorize.');
        }
      });
    };
    facebook.status = FB.getLoginStatus();
    
    
  });
}); 
