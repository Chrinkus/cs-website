/* HTML testing
 *
 * Here is my first attempt at altering HTML through javascript.
 */
const loadFile = require("./load-file");
const writeFile = require("./write-file");
const fs = require("fs");

//document.body.onload = populateHTML;

/*
function addTextElement(element, content) {
    "use strict";

    const newEle = document.createElement(element);
    const eleText = document.createTextNode(content);

    newEle.appendChild(eleText);
    return newEle;
}

function populateHTML() {
    loadFile("../config.json")
    .then(file => {
        const config = JSON.parse(file);

        console.log(config.title);

        document.getElementById("banner").appendChild(
            addTextElement("h1", config.title));
    }).catch(err => {
        console.log(err);
    });
}
*/

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
}

function writeHTML(destination) {
    "use strict";

    Promise.all([
        loadFile("../config.json").then(file => JSON.parse(file)),
        loadFile("../templates/injected.html")
    ]).then(files => {
        const [config, htmlTemp] = files;

        const header = createNode("h1", config.title) +
                       createNode("p", config.author) +
                       createNode("p", "Mas?"),
              newHTML = htmlTemp.replace("<!-- -->", header);

        writeFile(destination, newHTML); 

    }).catch(err => {
        console.log(err);
    });
}
    /*
    loadFile("../config.json")
    .then(file => {
        const config = JSON.parse(file);

        loadFile("../templates/injected.html")
        .then(file => {
            
            fs.writeFile("../templates/test.html",
                file.replace("<!-- -->", createNode("h1", config.title)),
                (err) => {
                    if (err)
                        console.log(err);
                    else
                        console.log("File written!");
                });
        });
    }).catch(err => {
        console.log(err);
    });
}
*/

writeHTML("../templates/test.html"); // WORKS!!
