import {
    createTable,
    Item,
    encrypt,
    decrypt,
    shuffle
} from './dbfunctions.js'

// create a function to download videos from youtube
function downloadVideo(url, name) {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open the request
    xhr.open('GET', url, true);
    // set the response type
    xhr.responseType = 'blob';
    // set the onload function
    xhr.onload = function() {
        // get the blob from the xhr
        var blob = xhr.response;
        // create a new anchor element
        var anchor = document.createElement('a');
        // set the href to the blob
        anchor.href = window.URL.createObjectURL(blob);
        // set the download attribute to the name
        anchor.download = name;
        // click the anchor
        anchor.click();
    };
    // send the request
    xhr.send();
}

