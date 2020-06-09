// step 1
let xhr = new XMLHttpRequest();

// step 2
xhr.open('GET', 'https://sguett.github.io/Exercise/data.json');

// step 3
xhr.send();

xhr.responseType = 'json'; // for json file (4)

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        // const data = JSON.parse(xhr.response) if we don't specify (4)
        // console.log("username=",data[1].username) if we don't specify (4)
        for (val in xhr.response){
            console.log(val)
        }
        // console.log(xhr.response)
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