//photo data
var photoData = [
    {url: "photos/DSC01049.JPG", description: "City View"},
    {url: "photos/DSC01066.JPG", description: "Ferris Wheel"},
    {url: "photos/DSC02511.jpg", description: "A Building in the forbidden city with extra long text"},
    {url: "photos/DSC03810.jpg", description: "City from Mt Gravett look out"},
    {url: "photos/DSC05750.jpg", description: "Sun rise"}
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
document.getElementById("search").addEventListener("submit", function(event){
    event.preventDefault();
});
document.getElementById("search").addEventListener("submit", search);
//gets the login button
document.getElementById("login-btn").onclick = loginAlert;

/**
 * Reads the input of the search field and displays any photos which have a 
 * description like the input. If the search query is not valid then an error is
 * displayed.
 */
function search() {
    //get seachFeild text
    var query = document.getElementById("searchField").value.toLowerCase().trim();
    //get error html location
    var error = document.getElementById("error"); 
    error.innerHTML = "";
    //results array
    var result = [];

    //if the query is not empty
    if (query.length > 0){
        //iterate through the photoData
        for (var i = 0; i < photoData.length; i++){
            //compare photo description with query, if it matches then add photo to results
            if (photoData[i].description.toLowerCase().indexOf(query) != -1) {
                 result.push(photoData[i]);
            }else {
                //dont do anything
            }
        }
        if (result.length > 0) {
            displayThumb(result);
        }else {
            error.innerHTML = "No matching photo found";
        }
        
    }else {
        thumbs.innerHTML = originalThumb;
    }
}

/**
 * 
 */
function displayThumb(result) {
    var htmlStr = "";
    for (var i = 0; i < result.length; i++){
         htmlStr +=  '<figure><a href="' + result[i].url + '"><img src="' + result[i].url + '" alt="' + result[i].description + '" height="200" width="200"></a><figcaption>' + result[i].description + '</figcaption></figure>'
    }
    thumbs.innerHTML = htmlStr;
}

/**
 * Displays a popup box saying this button doesnt work yet.
 */
function loginAlert() {
    alert(" this feature is not available yet");
}