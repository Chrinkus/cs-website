/* get-files module
 *
 * file changed, needs new info.
 */

const readFile  = require("./node-wrappers/read-file");
const readDir   = require("./node-wrappers/read-dir");

function getFilesFromDir(directory) {
    "use strict";
    // Returns an array of files from given directory
    return readDir(directory).then(fileNames => {

        return Promise.all(
            fileNames.map(file => readFile(`${directory}/${file}`))
        );
    });
}

module.exports = getFilesFromDir;

// TEST
//getAllFilesFromDir("./posts").then(files => console.log(files));
