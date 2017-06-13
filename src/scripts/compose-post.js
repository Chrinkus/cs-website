const { createNode, makeImage, makeHgroup } = require("./create-ele");
const parseCode         = require("./parse-code");
const markdownToHTML    = require("./markdown-html.js");

function composePost(config, template, post) {
    "use strict";

    const { head, body } = post;

    const title     = createNode("title", `${config.title} | ${head.title}`),
          postImg   = makeImage(head.img, head.alt),
          hgroup    = makeHgroup(head),
          section   = createNode("section", writeSection(body));

    return template.replace("<!-- title -->", title)
                   .replace("<!-- postImg -->", postImg)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- section -->", section);
}

function writeSection(content) {
    "use strict";

    return content.reduce(markdownToHTML, "");
    /*
    return content.reduce((htmlStr, line) => {
        markdownToHTML(htmlStr, line);
    }, "");
    */
}

module.exports = composePost;
