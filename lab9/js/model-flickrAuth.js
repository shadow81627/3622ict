//secret used for signed requests
flickrAuth.SECRET = "2b4fb28819195ca9";

/**
 * Takes a given url and returns a signed url
 */
flickrAuth.signRequest = function(url) {
    //splits base url from parameter
    var urlBits = url.split('?');
    //splits parameter
    var params = urlBits[1].split('&');
    params = params.sort();
    
    //iterate over the string and remove the equal character
    for (var i = 0; i < params.length; i++){
        params[i] = params[i].replace('=', '');
    }
    //rejoin the parameters into a single string
    var strToSign = params.join('');
    
    //add secret to string to sign
    strToSign = flickrAuth.SECRET + strToSign;
    //hash the string
    var digest = CryptoJS.MD5(strToSign);
    //add hash as parameter to original request url
    var signedURL = url + '&api_sig=' + digest;
    return signedURL;
}

flickrAuth.login = function(){
    var getFrobStr =' https://api.flickr.com/services/rest/?method=flickr.auth.getFrob&format=json&nojsoncallback=1&' + flickr.APIkey;
    getFrobStr = flickrAuth.signRequest(getFrobStr);
    $.get(getFrobStr, function(data){
        flickrAuth.frob = data.frob._content;
        var authLink = "http://flickr.com/services/auth/?" + flickr.APIkey + "&perms=write&frob=" + flickrAuth.frob;
        authLink = flickrAuth.signRequest(authLink);
        window.open(authLink);
        console.log(authLink);
        alert(" this feature is not available yet");
        console.log("User has signed in");
    });
}