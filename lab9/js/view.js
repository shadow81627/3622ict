 /**
 * Displays a given set of photos.
 */
view.displayThumb = function(result) {
    var htmlStr = "";
    for (var i = 0; i < result.length; i++){
         htmlStr +=  '<figure><a href="' + result[i].url + '" data-lightbox="image-1" data-title="' + result[i].description + '"><img src="' + result[i].thumbnail +  '" alt="' + result[i].description + '" height="200" width="200"></a><figcaption>' + result[i].description + '</figcaption></figure>';
    }
    $("#thumbnails").html(htmlStr);
    $( "figure" ).draggable();
}

/**
 * Displays a popup box saying this button doesnt work yet.
 */
view.loginAlert = function() {
    alert(" this feature is not available yet");
} 

$( "figure" ).draggable();