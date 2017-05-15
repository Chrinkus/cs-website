const readFile      = require("./node-wrappers/read-file");
const writeFile     = require("./node-wrappers/write-file");
const getPosts      = require("./get-posts");
const parsePost     = require("./parse-post");

function writePostHTML() {
    "use strict";

    Promise.all([

        readFile("../templates/post.html"),
        getPosts("../posts")

    ]).then(files => {
        const [html, posts] = files;

        posts.forEach(post => {
            writeFile(`../../site/static-pages/${post.head.title}.html`,
                      parsePost(html, post));
        });

    }).catch(err => {
        console.error(err);
    });
}

writePostHTML();
