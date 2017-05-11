const getFiles = require("./get-files");

const path = "./posts";

function parseArrOfPostsAsStrings(arr) {
    "use strict";

    arr.forEach(post => {

        // do work
    });
}
/* GOAL
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
