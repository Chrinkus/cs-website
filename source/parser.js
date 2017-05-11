const fs        = require("fs");
const loadFile  = require("./load-file");

function getFilesFrom(targetDir) {
    return new Promise((resolve, reject) => {
        fs.readdir(targetDir, (err, fileNames) => {
            if (err)
                reject(err);
            else
                resolve(fileNames);
        });
    }).then(fileNames => {
        const files = fileNames.map(file => {
            loadFile(`${targetDir}/${file}`);   
        });
        return Promise.all(files);
        /*
        return Promise.all(fileNames.map(file => {
            loadFile(`${targetDir}/${file}`);   
        }));
        */
    }).then(files => {
        console.log(files);
    }).catch(err => {
        console.log(err);
    });
}

getFilesFrom("./posts");

/*
Promise.all(getFilesFrom("./posts")).then(posts => {
    console.log(posts);
}).catch(err => {
    console.log(err);
});
*/
/*
    fs.readdirSync("./posts")
        .map(file => loadFile(`./posts${file}`, "utf8"))
Promise.all(promisePosts).then(posts => {
});
*/

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
