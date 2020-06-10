// step 1
let xhr = new XMLHttpRequest();
// step 2
xhr.open('GET', 'https://zivuch.github.io/ajax/emails.xml');
// xhr.setRequestHeader('Access-Control-Allow-Origin',"*")

// step 3
xhr.send();

xhr.responseType = 'document'; // for xml file

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        built(xhr.response)
        // console.log(xhr.response)
    }
}

// xhr.onprogress = function (event) {
//     if (event.lengthComputable) {
//         console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//         console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }

// };

xhr.onerror = function () {
    console.log("Request failed");
};

const built = (arr) => {
    const root = document.getElementById("root")
    var table = "<tr><th>to</th><th>from</th><th>heading</th><th>body</th></tr>";
    var x = arr.getElementsByTagName("email");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("to")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("from")[0].childNodes[0].nodeValue +
            "</td><td>"+
            x[i].getElementsByTagName("heading")[0].childNodes[0].nodeValue +
            "</td><td>"+
            x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    root.innerHTML = table;
}