const fs = require("fs");

function loadFile(path, enc = "utf8") {

    return new Promise((resolve, reject) => {
        fs.readFile(path, enc, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = loadFile;
