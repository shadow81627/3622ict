  //The Identifier for this app
  facebook.APP_ID = "342478882810704";
  //The URL for the app
  facebook.APP_URL = "https://s5014219-s5014219.c9users.io/3622ICT/Assignment/";
  //The facebook login url for this app
  facebook.loginURL = "https://www.facebook.com/dialog/oauth?client_id=" + APP_ID + "&redirect_uri=" + APP_URL + "&response_type=token";
  
  //the varible used to store the access token retruned by facebook
  facebook.access_token = "";
  
  facebook.getToken = function(){
    if (access_token == "") {
      // attempts to get access token from the current URL.
      var currentURL = window.location.href;
      var splitURL = currentURL.split("?");
      if (splitURL.length == 2) {
        splitURL = splitURL[1].split("=");
        // if token is in the URL, assign it to model.access_token...
        access_token = splitURL[1];
      }
    }
    if (access_token != "") {
      // access token is available
      return true;
    } else {  // start user authentication
      window.location.replace(loginURL);
    }
  };
