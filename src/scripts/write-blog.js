const readFile      = require("./node-wrappers/read-file");
//const writeFile     = require("./node-wrappers/write-file");
const getPosts      = require("./get-posts");
//const composePost   = require("./compose-post");
//const composeMain   = require("./compose-main");

function writeBlog() {
    "use strict";

    Promise.all([

        readFile("../templates/main.html"),
        readFile("../templates/post.html"),
        readFile("../config.json").then(file => JSON.parse(file)),
        getPosts("../posts")

    ]).then(files => {
        const [mainHTML, postHTML, config, posts] = files;

        writeMainHTML(config, mainHTML, posts.map(post => post.head));

        writePostHTML(config, postHTML, posts);

    }).catch(err => {
        console.error(err);
    });
}

writeBlog();
