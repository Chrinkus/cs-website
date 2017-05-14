const fs = require("fs");

function loadFile(path) {
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

module.exports = loadFile;
