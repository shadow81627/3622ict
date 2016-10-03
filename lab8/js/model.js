//my api key for flickr
model.APIkey = "api_key=a1979ae64d705370ba668cfc361a554e";
//the array of photos from flickr
model.photos = [];
// number of photos
model.numPhotos = 0;
//the number of photos found by get image
model.sizesReturn = 0;

/**
 * Get the interestingness photos from flickr.
 */
model.getInteresting = function() {
   var interestingStr = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&per_page=20&format=json&nojsoncallback=1' + '&' + model.APIkey;
   $.get(interestingStr, function(data){
        model.fetchLink(data);
    });
    
}

/**
 * Creates an array of photos from
 * data: a JSON of photo data from flickr.
 */
model.fetchLink = function(data){
    model.photos = [];
    model.numPhotos = data.photos.photo.length;
    model.sizesReturn = 0;
    for(var i = 0; i < data.photos.photo.length; i++){
        var photoObj = {id: data.photos.photo[i].id, description: data.photos.photo[i].title, thumbnail: '', url: ''}
        model.photos.push(photoObj);
        model.getImage(photoObj);
    }
}

 /**
 * Gets the url for the different sizes of images.
 */
 model.getImage = function(photoObj){
    var getSizeStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=' + photoObj.id + '&format=json&nojsoncallback=1' + '&' + model.APIkey;
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
        model.sizesReturn++;
        //if we have itterated through all of the photos then display them
        if (model.sizesReturn == model.numPhotos){
            view.displayThumb(model.photos);
        }
    });
}

model.getSearch = function(){
    var query = $("#searchField").val().toLowerCase().trim();
    var searchStr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + query + '&per_page=20&format=json&nojsoncallback=1' + '&' + model.APIkey;
    $.get(searchStr, function(data){
        model.fetchLink(data);
    });
}