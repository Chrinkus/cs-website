/* Read File
 *
 * This function is a promise wrapper for the node.js fs.readFile function.
 */

const fs = require("fs");

function readFile(path) {
    "use strict";

    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.info(`${path} loaded`);
                resolve(data);
            }
        });
    });
}

module.exports = readFile;
