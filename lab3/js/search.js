var figures = document.getElementsByTagName("figure");
var figcaption = figures[0].innerHTML;
document.getElementById("search-btn").onclick = displayThumb;
console.log(figcaption);

/**
 * Read the searchFeild input, then displays the thumbnail the number of times 
 * based on the number ented into the searchField.
 */
function displayThumb() {
    var num = document.getElementById("searchField").value;
    var htmlStr = "";
    for (var i = 0; i < num; i++) {
        htmlStr += '<figure>' + figcaption + '</figure>';
    }
    var thumbs = document.getElementById("thumbnails");
    thumbs.innerHTML = htmlStr;
    console.log(htmlStr);
}