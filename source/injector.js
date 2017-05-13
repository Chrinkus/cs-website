/* HTML testing
 *
 * Here is my first attempt at altering HTML through javascript.
 */
const loadFile = require("./load-file");
const fs = require("fs");

//document.body.onload = populateHTML;

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

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
}

function writeHTML() {
    "use strict";

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

writeHTML(); // WORKS!!
