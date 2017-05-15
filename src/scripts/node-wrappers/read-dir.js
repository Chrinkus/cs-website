/* Read Dir
 *
 * This function is a promise wrapper for the node.js fs.readdir function.
 */

const fs = require("fs");

function readDir(directory) {
    "use strict";

    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, fileNames) => {
            if (err)
                reject(err);
            else {
                console.info(`${directory} read`);
                resolve(fileNames);
            }
        });
    });
}

module.exports = readDir;
