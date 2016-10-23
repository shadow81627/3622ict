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
           facebook.description = response.description;
           $('#description').html(facebook.description);
           //get the albums
           facebook.albums =response.albums;
           facebook.destinations = [];
           var htmlStr = '';
           for(var i = 0; i < facebook.albums.data.length; i++){
            //get the album by id
            FB.api('/'+ facebook.albums.data[i].id, {fields: 'location, cover_photo, photos'}, function(response) {
              //if the album location contains the word Australia then add it to destinations
              if( typeof response.location !== "undefined" && response.location.includes("Australia")){
                var destination = response
                FB.api('/'+ destination.cover_photo_id, {fields: 'images'}, function(response) {
                    for(var j = 0; j < response.images.length; j++){
                        if(response.images[j].height == '320'){
                            htmlStr +=  '<figure><a href="' + response.images[j].source + '" data-lightbox="image-1" data-title="' + destination.cover_photo.name + '"><img src="' + response.images[j].source +  '" alt="' + destination.cover_photo.name + '" height="200" width="200"></a><figcaption>' + destination.cover_photo.name + '</figcaption></figure>';
                        }
                    }
                });
              }else{
                facebook.albums.data[i].pop();
              }
            });
           }
           $('#figures').html(htmlStr);
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
      });
    };
    facebook.status = FB.getLoginStatus();
    
    
  });
  $('#description').html(facebook.description);
}); 
