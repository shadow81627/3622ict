$(function(){
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', 
    function(){
        // This function is called after sdk.js has been loaded
        FB.init({ 
            appId: '123456789', 
            version:'v2.7'
        });
        //  Any code that uses SDK goes here or gets called from here. E.g.:
        $('#login').click(function(){
        model.login();  // call a custom function to log in to Facebook
        });
    });
});