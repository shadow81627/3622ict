$(function() {
    //photo data
    var photoData = [
        {url: "photos/DSC01049.JPG", description: "City View"},
        {url: "photos/DSC01066.JPG", description: "Ferris Wheel"},
        {url: "photos/DSC02511.jpg", description: "A Building in the forbidden city with extra long text"},
        {url: "photos/DSC03810.jpg", description: "City from Mt Gravett look out"},
        {url: "photos/DSC05750.jpg", description: "Sun rise"}
    ];
    
    /**
     * Creates a list of tags from the discription of photos
     */
    var tags = function(){
        var array1 = [];
        for(var i = 0; i < photoData.length; i++){
           var array2 = photoData[i].description.toLowerCase().split(" ");
           $.merge(array1, array2);
        }
        var uniqueTags = [];
        $.each(array1, function(i, el){
            if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
        });
        return uniqueTags;
    };
    
    var availableTags = tags();
    
    console.log(availableTags);

    $("#search").submit(function(event){
        event.preventDefault();
        search();
    });
    
    $( "#searchField" ).autocomplete({
      _renderMenu: function( ul, items ) {
          var that = this;
          $.each( items, function( index, item ) {
            that._renderItemData( ul, item );
          });
          $( ul ).find( "li:odd" ).addClass( "odd" );
        }
    });
    
    $( "#searchField" ).autocomplete({
      source: availableTags
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
    function search() {
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
    
    /**
     * Displays a given set of photos.
     */
    function displayThumb(result) {
        var htmlStr = "";
        for (var i = 0; i < result.length; i++){
             htmlStr +=  '<figure><a href="' + result[i].url + '"><img src="' + result[i].url + '" alt="' + result[i].description + '" height="200" width="200"></a><figcaption>' + result[i].description + '</figcaption></figure>';
        }
        $("#thumbnails").html(htmlStr);
    }
    
    /**
     * Displays a popup box saying this button doesnt work yet.
     */
    function loginAlert() {
        alert(" this feature is not available yet");
    } 


});



