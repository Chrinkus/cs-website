const readFile      = require("./node-wrappers/read-file");
const writeFile     = require("./node-wrappers/write-file");
const getPosts      = require("./get-posts");
const composePost   = require("./compose-post");
const composeMain   = require("./compose-main");

function writeBlog() {
    "use strict";

    Promise.all([

        readFile("../templates/main.html"),
        readFile("../templates/post.html"),
        readFile("../config.json").then(file => JSON.parse(file)),
        getPosts("../posts")

    ]).then(files => {
        const [mainHTML, postHTML, config, posts] = files;

        const sortedPosts = posts
            .sort((a, b) => Date.parse(a.head.date) - Date.parse(b.head.date))
            .reverse();

        const newestFive = sortedPosts
            .slice(0, 5)
            .map(post => post.head);

        writePostHTML(config, postHTML, posts);

        writeMainHTML(config, mainHTML, newestFive);

    }).catch(err => {
        console.error(err);
    });
}

function writePostHTML(config, HTMLTemp, posts) {
    "use strict";
    
    posts.forEach(post => {
        writeFile(`../../site/static-pages/${post.head.title}.html`,
                  composePost(config, HTMLTemp, post));
    });
}

function writeMainHTML(config, HTMLTemp, postHeads) {
    "use strict";

    writeFile();
}
