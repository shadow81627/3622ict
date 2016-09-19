var APIkey = "api_key=a1979ae64d705370ba668cfc361a554e";

$(function() {

    getInteresting()
    
    console.log(APIkey)
    
    function getInteresting(){
       var interestingStr = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&per_page=20&format=json&nojsoncallback=1" + "&" + APIkey;
       interestingStr = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=b9d0c4415b87adff9c88587097315427&per_page=20&format=json&nojsoncallback=1';
       console.log(interestingStr);
       $.get(interestingStr, function(data){
            console.log(data);
            fetchLink()
        });
        
    }
    
    function fetchLink(data){
        for(var i = 0; data.photos.photo.length; i++){
            console.log(data.photos.photo[id].id)
        }
    }
    
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
    
    /**
     * Creates a list of tags from the discription of photos. Sets the 
     * autocomplete for the search field using the tags.
     */
        $.getJSON("data/photoData.json", function(data){
            var photoData = data.data;
            var array1 = [];
            for(var i = 0; i < photoData.length; i++){
               var array2 = photoData[i].description.toLowerCase().split(" ");
               $.merge(array1, array2);
            }
            
            var uniqueTags = [];
            $.each(array1, function(i, el){
                if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
            });

            $( "#searchField" ).autocomplete({
              source: uniqueTags
            });
        });

    $("#search").submit(function(event){
        event.preventDefault();
        $.getJSON("data/photoData.json", function(data) {
            search(data.data);
        });
    });

    $("#login-btn").click(function(){
        loginAlert();
    });
    
    /**
     * Reads the given input of a searchFeild if the input is in a photo 
     * description then that photo will be set to display. This method is not 
     * case sensitive. If the given input is null or whitespace then all photos 
     * will be displayed.
     */
    function search(photoData) {
        var query = $("#searchField").val().toLowerCase().trim();
        var error = $("#error").html(""); 
        var result = [];

        if (query.length > 0){
            for (var i = 0; i < photoData.length; i++){
                if (photoData[i].description.toLowerCase().indexOf(query) != -1) {
                     result.push(photoData[i]);
                }else {
                }
            }
            if (result.length > 0) {
                displayThumb(result);
            }else {
                error.html("No matching photo found");
            }
            
        }else {
            displayThumb(photoData);
        }
    }
    
    $( "figure" ).draggable();
    
    /**
     * Displays a given set of photos.
     */
    function displayThumb(result) {
        var htmlStr = "";
        for (var i = 0; i < result.length; i++){
             htmlStr +=  '<figure><a href="' + result[i].url + '" data-lightbox="image-1" data-title="' + result[i].description + '"><img src="' + result[i].url +  '" alt="' + result[i].description + '" height="200" width="200"></a><figcaption>' + result[i].description + '</figcaption></figure>';
        }
        $("#thumbnails").html(htmlStr);
        $( "figure" ).draggable();
    }
    
    /**
     * Displays a popup box saying this button doesnt work yet.
     */
    function loginAlert() {
        alert(" this feature is not available yet");
    } 
    
    function getInteresting(){
        
    }

});



