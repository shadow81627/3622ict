

$(function() {


    /**
     * Gets the url for the different sizes of images.
     */
    function getImage(photoObj){
        var getSizeStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=' + photoObj.id + '&format=json&nojsoncallback=1' + '&' + APIkey;
        $.get(getSizeStr, function(data){
            //Retrive different size image
            for(var i = 0; i < data.sizes.size.length; i ++) {
                if(data.sizes.size[i].label == "Small"){
                    photoObj.thumbnail = data.sizes.size[i].source;
                }
                if(data.sizes.size[i].label == "Large") {
                    photoObj.url = data.sizes.size[i].source;
                }
            }
            if(photoObj.url == ''){
                photoObj.url = data.sizes.size[data.sizes.size.length -1].source;
            }
            if(photoObj.thumbnail == ''){
                photoObj.thumbnail = data.sizes.size[data.sizes.size.length -1].source;
            }
            sizesReturn++;
            //if we have itterated through all of the photos then display them
            if (sizesReturn == numPhotos){
                displayThumb(photos);
            }
        });
    }
    
    function getSearch(){
        var query = $("#searchField").val().toLowerCase().trim();
        var searchStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + query + '&per_page=20&format=json&nojsoncallback=1' + '&' + APIkey;
        $.get(searchStr, function(data){
            fetchLink(data);
        });
    }
    
});



