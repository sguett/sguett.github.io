// step 1
let xhrJSON = new XMLHttpRequest();
let xhrRobot = new XMLHttpRequest();
// step 2
xhrJSON.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhrRobot.open('GET', 'https://robohash.org/');
// step 3
xhrJSON.send();
xhrRobot.send();

xhrJSON.responseType = 'json'; // for json file (4)

xhrJSON.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        Built(xhr.response)
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
    const root = document.getElementById('root')
    arr.forEach((item,i) => {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let img = document.createElement("img");

        h1.innerText = item.name;
        p.innerText = item.company.name;
        img.setAttribute("src",`https://robohash.org/${item.id}?200x200`) // item.id or i, it's the same here
        
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p);

        root.appendChild(div);
    });
}