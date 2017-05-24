const { createNode, makeImage, makeTime } = require("./create-ele");

function composePost(config, template, post) {
    "use strict";

    const { head, body } = post;

    const title     = createNode("title", `${config.title} | ${head.title}`),
          postImg   = makeImage(head.img, head.alt),
          hgroup    = createNode("hgroup",
                          createNode("h1", head.title)), 
          aside     = createNode("aside",
                          createNode("h2", head.author) +
                          createNode("p", makeTime(head.date))),
          article   = createNode("article", sectionPost(body));

    return template.replace("<!-- title -->", title)
                   .replace("<!-- postImg -->", postImg)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- aside -->", aside)
                   .replace("<!-- article -->", article);
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
