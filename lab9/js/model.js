//my api key for flickr
flickr.APIkey = "api_key=a1979ae64d705370ba668cfc361a554e";
//the array of photos from flickr
flickr.photos = [];
// number of photos
flickr.numPhotos = 0;
//the number of photos found by get image
flickr.sizesReturn = 0;

flickr.displayCallback;

/**
 * Get the interestingness photos from flickr.
 */
flickr.getInteresting = function(displayCallback) {
    flickr.displayCallback = displayCallback;
   var interestingStr = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&per_page=20&format=json&nojsoncallback=1' + '&' + flickr.APIkey;
   interestingStr = flickrAuth.signRequest(interestingStr);
   $.get(interestingStr, function(data){
        flickr.fetchLink(data);
    });
    
}

/**
 * Creates an array of photos from
 * data: a JSON of photo data from flickr.
 */
flickr.fetchLink = function(data){
    flickr.photos = [];
    flickr.numPhotos = data.photos.photo.length;
    flickr.sizesReturn = 0;
    for(var i = 0; i < data.photos.photo.length; i++){
        var photoObj = {id: data.photos.photo[i].id, description: data.photos.photo[i].title, thumbnail: '', url: ''}
        flickr.photos.push(photoObj);
        flickr.getImage(photoObj);
    }
}

 /**
 * Gets the url for the different sizes of images.
 */
 flickr.getImage = function(photoObj){
    var getSizeStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=' + photoObj.id + '&format=json&nojsoncallback=1' + '&' + flickr.APIkey;
    getSizeStr = flickrAuth.signRequest(getSizeStr);
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
        flickr.sizesReturn++;
        //if we have itterated through all of the photos then display them
        if (flickr.sizesReturn == flickr.numPhotos){
            flickr.displayCallback(flickr.photos);
        }
    });
}

flickr.getSearch = function(){
    var query = $("#searchField").val().toLowerCase().trim();
    var searchStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + query + '&per_page=20&format=json&nojsoncallback=1' + '&' + flickr.APIkey;
    searchStr = flickrAuth.signRequest(searchStr);
    $.get(searchStr, function(data){
        flickr.fetchLink(data);
    });
}