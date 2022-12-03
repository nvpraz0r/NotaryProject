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

            // get various stats for the txt that is being loaded
            // getDocStats(currentBook);


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

    var mostUsed = document.getElementById("mostUsed");
    var leastUsed = document.getElementById("leastUsed");

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

    // sort array
    let wordList = sortProperies(wordDictionary);

    // return the top 5 and bottom 5 words
    var topFiveWords = wordList.slice(0,6);
    var leastFiveWords = wordList.slice(-6,wordList.length);

    // write the values to the page
    ulTemplate(topFiveWords, mostUsed);
    ulTemplate(leastFiveWords, leastUsed);
}

// 
function sortProperies(wordDictionary){
    
    // first convert the object to an array
    let rtnArray = Object.defineProperty(obj);

    // sort the array
    rtnArray.sort(function (first, second){
        return second [1] - first[1];
    });

    return rtnArray;
}

function ulTemplate(items, element){

    let rowTemplate = document.getElementById("template-ul-items");
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = "";

    for(i = 0; i < items.length - 1; i++){
        resultsHTML += templateHTML.replace('{{val}}', items[i][0] + " : " + items[i][1] + "time(s)");
    }

    element.innerHTML = resultsHTML;
}