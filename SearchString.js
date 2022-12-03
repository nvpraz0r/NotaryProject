// load a txt file
function loadBook(filename,displayName){
    let currentBook = "";
    let url = "texts/" + filename;

    // reset book UI before sending in the new book
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").innerHTML = "";

    // create a server request to load txt file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            // 
            currentBook = xhr.responseText;
            // set content to txt contents
            document.getElementById("fileContent").innerHTML = currentBook;

            var element = document.getElementById("fileContent");
            element.scrollTop = 0;
        }
    };

}