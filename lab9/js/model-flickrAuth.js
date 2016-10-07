//secret used for signed requests
flickrAuth.SECRET = "2b4fb28819195ca9";

/**
 * Takes a given url and returns a signed url
 */
flickrAuth.signRequest = function(url) {
    //splits base url from parameter
    var urlBits = url.split('?');
    console.log(urlBits);
    //splits parameter
    var params = urlBits[1].split('&');
    console.log(params);
    params = params.sort();
    
    //iterate over the string and remove the equal character
    for (var i = 0; i < params.length; i++){
        params[i] = params[i].replace('=', '');
    }
    //rejoin the parameters into a single string
    var strToSign = params.join('');
    console.log(strToSign);
    
    strToSign = flickrAuth.SECRET + strToSign;
    console.log(strToSign);
    var digest = CryptoJS.MD5(strToSign);
    console.log(digest);
    var signedURL = url + '&api_sig=' + digest;
    console.log(signedURL);
    return signedURL;
}