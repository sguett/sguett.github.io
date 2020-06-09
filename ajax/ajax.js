// step 1
let xhr = new XMLHttpRequest();

// step 2
xhr.open('GET', 'https://sguett.github.io/ajax/data.html');

// step 3
xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        console.log(xhr.response)
    }
}

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
    }

};

xhr.onerror = function () {
    alert("Request failed");
};