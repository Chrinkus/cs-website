/* Write File
 *
 * This function is a promise wrapper for the node.js fs.writeFile function.
 */

const fs = require("fs");

function writeFile(file, data) {
    "use strict";

    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err)
                reject(err);
            else
                console.log(`${file} written`);
        });
    });
}

module.exports = writeFile;
