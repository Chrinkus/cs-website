const { createNode, makeImage } = require("./create-ele");

function composePost(config, template, post) {
    "use strict";

    const { head, body } = post;

    const title     = createNode("title", `${config.title} | ${head.title}`),
          postImg   = makeImage(head.img, head.alt),
          hgroup    = createNode("hgroup",
                          createNode("h1", head.title) +
                          createNode("time", `${head.author}, ${head.date}`)),
          section   = createNode("section", sectionPost(body));

    return template.replace("<!-- title -->", title)
                   .replace("<!-- postImg -->", postImg)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- section -->", section);
}

function sectionPost(content) {
    "use strict";

    return content.reduce((htmlStr, section) => {
        if (section.charAt(0) === "#")
            htmlStr += makeTitle(section);
        else
            htmlStr += createNode("p", section);

        return htmlStr;
    }, "");
}

function makeTitle(titleSection) {
    "use strict";
    const [, hLevel, titleText] = /^(#+)\s(.*)/.exec(titleSection);

    return createNode(`h${hLevel.length}`, titleText);
}

module.exports = composePost;
