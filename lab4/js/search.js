//photo data
var photoData = [
    {url: "photos/DSC01049.JPG", description:"City View"},
    {url: "photos/DSC01066.JPG", description:"Ferris Wheel"},
    {url: "photos/DSC02511.jpg", description:"A Building in the forbidden city with extra long text"},
    {url: "photos/DSC03810.jpg", description:"City from Mt Gravett look out"},
    {url: "photos/DSC05750.jpg", description:"Sun rise"}
];
//gets all the figures
var figures = document.getElementsByTagName("figure");
//gets the first figure
var figcaption = figures[0].innerHTML;
//get thumbnail location
var thumbs = document.getElementById("thumbnails");
//gets the original thumb nail content
var originalThumb = thumbs.innerHTML;
//gets the search button
document.getElementById("search-btn").onclick = search;
//gets the login button
document.getElementById("login-btn").onclick = loginAlert;

/**
 * Reads the input of the search field and displays any photos which have a 
 * description like the input. If the search query is not valid then an error is
 * displayed.
 */
function search() {
    //get seachFeild text
    var query = document.getElementById("searchField").value.trim();
    //get error html location
    var error = document.getElementById("error"); 
    //results array
    var results = [];

    //if the query is not empty
    if (query.length > 0){
        //set the error to be empty
        error.innerHTML = "";
        //iterate through the photoData
        for (var i = 0; i < photoData.length; i++){
            //compare photo description with query, if it matches then add photo to results
            if (photoData[i].description.indexOf(query) != -1) {
                 result.push(photoData[i]);
            }else {
                //dont do anything
            }
        }
        displayThumb(result);
    }else {
        error.innerHTML = 'Please enter a valid query';
        thumbs.innerHTML = originalThumb;
    }
}

/**
 * 
 */
function displayThumb(result) {
    var htmlStr = "";
    for (var i = 0; i < result.length; i++){
         htmlStr += '<figure>' + figcaption + '</figure>';
    }
    thumbs.innerHTML = htmlStr;
}

/**
 * Displays a popup box saying this button doesnt work yet.
 */
function loginAlert() {
    alert(" this feature is not available yet");
}