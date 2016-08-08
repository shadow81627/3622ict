//gets all the figures
var figures = document.getElementsByTagName("figure");
//gets the first figure
var figcaption = figures[0].innerHTML;
//get thumbnail location
var thumbs = document.getElementById("thumbnails");
//gets the original thumb nail content
var originalThumb = thumbs.innerHTML;
//gets the search button
document.getElementById("search-btn").onclick = displayThumb;
//gets the login button
document.getElementById("login-btn").onclick = loginAlert;

/**
 * Read the searchFeild input, then displays the thumbnail a number of times 
 * entered into the searchField. Changes the background of 
 * every second thumbnail to be black. Checks to make sure input is a number.
 * If the number is a floating point number then it will be rounded down.
 */
function displayThumb() {
    //get seachFeild text
    var num = document.getElementById("searchField").value.trim();
    //get error html location
    var error = document.getElementById("error"); 

    if (isNaN(num) || num.length < 1){
        error.innerHTML = 'Please enter a number';
        thumbs.innerHTML = originalThumb;
    }else {
        var htmlStr = "";
        error.innerHTML = ' ';
        num = Math.floor(num);
        for (var i = 0; i < num; i++){
            if (i % 2 === 0){
                 htmlStr += '<figure style="background: black;">' + figcaption + '</figure>';
            }else {
            htmlStr += '<figure>' + figcaption + '</figure>';
            }
        }
        thumbs.innerHTML = htmlStr;
    }
}

/**
 * Displays a popup box saying this button doesnt work yet.
 */
function loginAlert() {
    alert(" this feature is not available yet");
}