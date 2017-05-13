const fs = require("fs");

function writeFile(file, data) {
    "use strict";

    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`${file} written`);
        });
    });
}
