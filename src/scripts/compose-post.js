const { createNode } = require("./create-ele");

function composePost(config, template, post) {
    "use strict";

    const { head, body } = post;

    const title     = createNode("title", `${config.title} | ${head.title}`),
          header    = createNode("header",
                          createNode("h1", head.title) +
                          createNode("time", `${head.author}, ${head.date}`));
          post      = sectionPost(body);

    return template.replace("<!-- title -->", title)
                   .replace("<!-- header -->", header)
                   .replace("<!-- post -->", post);
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
