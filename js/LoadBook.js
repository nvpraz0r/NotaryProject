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

            // remove line breaks and carriage returns then replace with a <br>
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>')

            // set content to txt contents
            document.getElementById("fileContent").innerHTML = currentBook;

            // scroll to the top of the content
            var element = document.getElementById("fileContent");
            element.scrollTop = 0;
        }
    };
}

// 
function getDocStats(fileContent){
    var docLength = document.getElementById("doclength");
    var wordCount = document.getElementById("wordCount");
    var charCount = document.getElementById("charCount");

    let text = fileContent.toLowerCase();
    let wordArray = text.match(/\b\S+\b/g);
    let wordDictionary = {};

    // 
    for(let word in wordArray){
        let wordValue = wordArray[word];
        if(wordDictionary[wordValue] > 0){
            wordDictionary[wordValue] += 1;
        } else {
            wordDictionary[wordValue] = 1;
        }
    }
}

// 
function sortProperies(wordDictionary){

}