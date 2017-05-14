/* Get Blog Posts
 *
 * Promises to return all blog posts from provided directory
 *
 * Usage:
 *
 * getFiles("../posts")
 * .then(posts => {
 *     // Do something with posts
 * });
 */

const getFiles = require("./get-files");

function parseFileStringToArr(fileStr) {
    "use strict";

    return fileStr.split("---")
        .map(section => section
                .trim()
                .split("\n")
                .filter(entry => entry));
}

function getHeader(headerArr) {
    "use strict";

    return headerArr.reduce((header, line) => {
        const [prop, value] = line.split(": ");
        header[prop] = value;
        return header;
    }, {});
}

function makePost(file) {
    "use strict";
    const postArr = parseFileStringToArr(file),
          post = {};

    post.head = getHeader(postArr[0]);
    post.body = postArr[1];

    return post;
}

function getPosts(path) {
    "use strict";
    return getFiles(path)
        .then(files => {
            return files.map(file => makePost(file));
        });
}

module.exports = getPosts;
