/* get-files module
 *
 * returns a Promise which will deliver all files in a given directory, served
 * as strings.
 *
 * Was written for cs-website project but has been sufficiently abstracted to 
 * work anytime all files from a directory must be retrieved.
 */
const fs        = require("fs");
const loadFile  = require("load-file");

function getFileNames(directory) {
    "use strict";

    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, fileNames) => {
            if (err)
                reject(err);
            else
                resolve(fileNames);
        });
    });
}

function getAllFiles(directory, fileNames) {
    "use strict";

    return Promise.all(fileNames.map(file => {
        return loadFile(`${directory}/${file}`);   
    }));
}

function getAllFilesFromDir(directory) {
    "use strict";
    return getFileNames(directory)
        .then(fileNames => {
            return getAllFiles(directory, fileNames);
        });
}

module.exports = getAllFilesFromDir;

// TEST
//getAllFilesFromDir("./posts").then(files => console.log(files));
