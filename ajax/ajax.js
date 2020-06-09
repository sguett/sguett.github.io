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
        const data = xhr.response
        // console.log(xhr.response)
        document.getElementById('root').innerHTML = data
    }
}

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }

};

xhr.onerror = function () {
    console.log("Request failed");
};