const writeFile     = require("./node-wrappers/writeFile");
const composePost   = require("./compose-post");

function writePostHTML(config, HTMLTemp, posts) {
    "use strict";
    
    posts.forEach(post => {
        writeFile(`../../site/static-pages/${post.head.title}.html`,
                  composePost(config, HTMLTemp, post));
    });
}

module.exports = writePostHTML;
