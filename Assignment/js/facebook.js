  //The Identifier for this app
  facebook.APP_ID = "342478882810704";
  //The URL for the app
  facebook.APP_URL = "https://s5014219-s5014219.c9users.io/3622ICT/Assignment/";
  //The facebook login url for this app
  facebook.loginURL = "https://www.facebook.com/dialog/oauth?client_id=" + facebook.APP_ID + "&redirect_uri=" + facebook.APP_URL + "&response_type=token";
  
  //the varible used to store the access token retruned by facebook
  facebook.access_token = "";
  
  facebook.getToken = function(){
    if (facebook.access_token == "") {
      // attempts to get access token from the current URL.
      var url = window.location.href;
      
      if (url.includes('?')){
        //splits base url from parameter
        var urlBits = url.split('?');
        console.log(urlBits);
        //splits parameter
        var params = urlBits[1].split('&');
        params = params.sort();
        
        //iterate over the string and remove the equal character
        for (var i = 0; i < params.length; i++){
            var paramsValue = params[i].split('=');
            for (var k = 0; k < paramsValue.length; k++){
              if (paramsValue[k].includes('access_token')){
                facebook.access_token = paramsValue[k+1];
              }
            }
        }
      }
    }
    if (facebook.access_token != "") {
      // access token is available
      return true;
    } else {  // start user authentication
      window.location.replace(facebook.loginURL);
    }
  };
