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
    const headerObj = {};

    headerArr.forEach(line => {
        const [prop, value] = line.split(": ");
        headerObj[prop] = value;
    });

    return headerObj;
}

function makePost(file) {
    "use strict";
    const postArr = parseFileStringToArr(file),
          post = {};

    post.head = getHeader(postArr[0]);
    post.body = postArr[1];

    return post;
}

async function getPosts(path) {
    const posts = getFiles(path)
        .then(files => {
            return files.map(file => makePost(file));
        });

    return await posts;
}

console.log(getPosts("./posts"));

/* TEST
const path = "./posts";

const blogPosts = getFiles(path)
    .then(files => {
        console.log(files.map(file => makePost(file)));
    });
*/

/* OUTPUT = Array of posts with format:
 * 
 * post = {
 *   preamble: {
 *     title: title,
 *     author: author,
 *     date: date,
 *     img-url: url
 *   }, 
 *   content: [
 *      "# Title",
 *      "Lorem ipsum..",
 *      "## Subtitle",
 *      "Morem ipsum.."
 *   ]
 * }
 */
