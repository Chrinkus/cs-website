/* get-files module
 *
 * returns a Promise which will deliver all files in a given directory, served
 * as strings.
 *
 * Was written for cs-website project but has been sufficiently abstracted to 
 * work anytime all files from a directory must be retrieved.
 */
const readFile  = require("./node-wrappers/read-file");
const readDir   = require("./node-wrappers/read-dir");

function getAllFiles(directory, fileNames) {
    "use strict";

    return Promise.all(fileNames.map(file => {
        return readFile(`${directory}/${file}`);   
    }));
}

function getAllFilesFromDir(directory) {
    "use strict";
    return readDir(directory)
        .then(fileNames => {
            return getAllFiles(directory, fileNames);
        });
}

module.exports = getAllFilesFromDir;

// TEST
//getAllFilesFromDir("./posts").then(files => console.log(files));
