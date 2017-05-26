const readFile      = require("./node-wrappers/read-file");
const writeFile     = require("./node-wrappers/write-file");
const getPosts      = require("./get-posts");
const composePost   = require("./compose-post");
const composeMain   = require("./compose-main");

(function writeBlog() {
    "use strict";

    Promise.all([

        readFile("../templates/temp-main.html"),
        readFile("../templates/temp-post.html"),
        readFile("../templates/aside.html"),
        readFile("./config.json").then(file => JSON.parse(file)),
        getPosts("../posts")

    ]).then(files => {
        const [mainHTML, postHTML, aside, config, posts] = files;

        // Will need this for Archives
        const sortedPosts = posts
            .sort((a, b) => Date.parse(a.head.date) - Date.parse(b.head.date))
            .reverse();

        // Pull out most recent posts for main page
        const newestFive = sortedPosts
            .slice(0, 5)
            .map(post => post.head);

        function makeFileName(spacedTitle) {
            return spacedTitle.replace(/ /g, "-");
        }

        // Write individual post pages
        posts.forEach(post => {
            post.head.file = makeFileName(post.head.title);
            writeFile(`${config.paths.pages}/${post.head.file}.html`,
                      composePost(config, postHTML, post)
                      .replace("<!-- aside -->", aside));
        });

        // Write main blog page
        writeFile(`${config.paths.pages}/main.html`,
                   composeMain(config, mainHTML, newestFive)
                   .replace("<!-- aside -->", aside));

    }).catch(err => {
        console.error(err);
    });
}());
