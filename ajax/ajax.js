// step 1
let xhr = new XMLHttpRequest();

// step 2
// xhr.open('GET', 'https://sguett.github.io/ajax/data.html');
xhr.open('GET', 'https://sguett.github.io/ajax/data.xml');

// step 3
xhr.send();

xhr.responseType = 'json'; // for json file (4)
xhr.responseType = 'document'; // for xml file (5)


xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        // const data = xhr.response
        // console.log(xhr.response)
        // console.log(JSON.parse(xhr.response))
        // const data = JSON.parse(xhr.response) if we don't specify (4)
        // console.log("username=",data[1].username) if we don't specify (4)
        console.log(xhr.response)
        const data = xhr.response;
        console.log(data.getElementsByTagName('user')); // if we use XML (5)
        // document.getElementById('root').innerHTML = data
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