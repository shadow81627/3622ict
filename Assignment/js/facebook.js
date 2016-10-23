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
    FBLogin = function() {
      FB.getLoginStatus(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         window.location = window.location.href + "content";
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
      });
    };
  });
}); 