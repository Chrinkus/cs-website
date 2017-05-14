const loadFile      = require("./load-file");
const getPosts      = require("./get-posts");
const parsePost     = require("./parse-post");
const writeFile     = require("./write-file");

function writePostHTML() {
    "use strict";

    Promise.all([

        loadFile("../templates/post.html"),
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
