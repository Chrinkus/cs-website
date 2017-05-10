const fs        = require("fs");
const loadFile  = require("./load-file");

const postFiles = fs.readdirSync("./posts");

const promisePosts = postFiles.map(file => {
    loadFile(`./posts/${file}`, "utf8");
});

Promise.all(promisePosts).then(posts => {
    posts.forEach(post => {
        post.split("---")
            .map(section => {
                section.trim().split("\n");
            });
    });

    console.log(posts);
});

/* GOAL
 * 
 * post = {
 *   preamble: {
 *     title: title,
 *     author: author,
 *     date: date,
 *     img-url: url
 *   }, 
 *   content: []
 * }
 *
 * preamble:
 * {
 * }
 *
 * content:
 * [
 *   "# Title",
 *   "Lorem ipsum..",
 *   "## Subtitle",
 *   "Morem ipsum.."
 * ]
 */
