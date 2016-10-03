var controller = {};
var model = {};
var view = {};

$(function() {
    model.getInteresting();
    $("#search").submit(function(event){
        event.preventDefault();
        model.getSearch();
    });

    $("#login-btn").click(function(){
        view.loginAlert();
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