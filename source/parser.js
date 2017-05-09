const fs = require("fs");

const posts = fs.readdir("./posts", (err, files) => {
    files.forEach(file => {
        fs.readFile(`./posts/${file}`, "utf8", (err, data) => {
            console.log(data.split("---"));
        });
    });
});

