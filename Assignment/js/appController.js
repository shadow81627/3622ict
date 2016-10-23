/*app.factory('FacebookFactory', function() {
    $window.fbAsyncInit = function() {
        FB.init({ 
          appId: '342478882810704',
          status: true, 
          cookie: true, 
          xfbml: true,
          version: 'v2.8'
        });
    
        var factory = {};
        factory.loginStatus = function(){
            return FB.getLoginStatus();
        };
        
        factory.description = function(){
            FB.api('/815157038515764', {fields: 'description'}, function(response) {
                return facebook.description = response.description;
            });
        };
        
        factory.destinations = function(){
            FB.api('/815157038515764', {fields: 'albums'}, function(response) {
                
                for(var i = 0; i < response.albums.data.length; i++){
                //console.log(response.albums.data[i]);
                //get the album by id
                FB.api('/'+ response.albums.data[i].id, {fields: 'location'}, function(response) {
                  //if the album location contains the word Australia then add it to destinations
                  //console.log(response);
                  if(response.location != "" && response.location.includes("Australia")){
                    console.log("stuff");
                  }else{
                    response.albums.data[i].pop();
                  }
                });
               }
               console.log(response.albums.data);
               return response.albums.data;
            });
        };
    
    };
    
    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   

});*/