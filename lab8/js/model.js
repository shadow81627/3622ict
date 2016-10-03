//my api key for flickr
var APIkey = "api_key=a1979ae64d705370ba668cfc361a554e";
//the array of photos from flickr
var photos = [];
// number of photos
var numPhotos = 0;
//the number of photos found by get image
var sizesReturn = 0;

 getInteresting();
    /**
     * Get the interestingness photos from flickr.
     */
    function getInteresting(){
       var interestingStr = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&per_page=20&format=json&nojsoncallback=1' + '&' + APIkey;
       $.get(interestingStr, function(data){
            fetchLink(data);
        });
        
    }
    
    /**
     * Creates an array of photos from
     * data: a JSON of photo data from flickr.
     */
    function fetchLink(data){
        photos = [];
        numPhotos = data.photos.photo.length;
        sizesReturn = 0;
        for(var i = 0; i < data.photos.photo.length; i++){
            var photoObj = {id: data.photos.photo[i].id, description: data.photos.photo[i].title, thumbnail: '', url: ''}
            photos.push(photoObj);
            getImage(photoObj);
        }
    }