var controller = {};
var flickr = {};
var flickrAuth = {};
var view = {};
var facebook = {};

$(function() {
    
    flickr.getInteresting(view.displayThumb);
    $("#search").submit(function(event){
        event.preventDefault();
        flickr.getSearch();
    });

    $("#login-btn").click(function(){
        facebook.getToken();
        console.log(facebook.access_token);
    });
    
    /**
     * When the splash button is clicked the thumbnails will be displayed and 
     * the splash screen button will be hidden.
     *
     */
    $("#splash-btn").click(function(){
        $("#splash").hide();
        $("#thumbnails").show(2000);
        $("#back-btn").show();
    });
    
    /**
     * When the back button is pressed the splash screen is displayed and the 
     * thumbnails are hidden.
     *
     */
     $("#back-btn").click(function() {
         $("#splash").show();
         $("#thumbnails").hide(2000);
         $("#back-btn").hide();
     });
     
    
});

controller.getUsername = function(username){
    view.displayUser(username);
}