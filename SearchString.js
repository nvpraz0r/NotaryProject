// load a txt file
function loadBook(filename,displayName){
    let currentBook = "";
    let url = "texts/" + filename;

    // reset book UI before sending in the new book
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").innerHTML = "";

    // create request to load txt files
    
}