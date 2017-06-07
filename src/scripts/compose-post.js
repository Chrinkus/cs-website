const { createNode, makeImage, makeTime, makeLink } = require("./create-ele");
const parseCode = require("./parse-code");

function composePost(config, template, post) {
    "use strict";

    const { head, body } = post;

    const title     = createNode("title", `${config.title} | ${head.title}`),
          postImg   = makeImage(head.img, head.alt),
          hgroup    = makeHgroup(head),
          section   = createNode("section", sectionPost(body));

    return template.replace("<!-- title -->", title)
                   .replace("<!-- postImg -->", postImg)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- section -->", section);
}

function sectionPost(content) {
    "use strict";
    let openCode = false,
        language = "";

    return content.reduce((htmlStr, section) => {
        if (openCode) {
            if (/^`{3}/.test(section)) {
                htmlStr += "</code>";
                openCode = false;
            } else {
                htmlStr += parseCode(section, language) + "<br/>";
            }

        } else if (/^`{3}/.test(section)) {
            openCode = true;
            language = section.slice(3);
            htmlStr += `<code class=${language}>`; 

        }else if (section.charAt(0) === "#") {
            htmlStr += makeTitle(section);

        } else {
            htmlStr += createNode("p", parseInlineText(section));
        }

        return htmlStr;
    }, "");
}

function makeTitle(titleSection) {
    "use strict";
    const [, hLevel, titleText] = /^(#+)\s(.*)/.exec(titleSection);

    return createNode(`h${hLevel.length}`, titleText);
}

function makeHgroup(head) {
    "use strict";
    const { title, date, textColor, bgColor } = head;

    return `<hgroup style="color:${textColor};background:${bgColor};">` +
               createNode("h1", title) +
               createNode("p", makeTime(date)) +
               "</hgroup>";
}

// TODO include better regexp for link detection(?)
function parseInlineText(section) {
    "use strict";

    return section
        // Inline links
        .replace(/\[([\w.]+)\]\(([^\)]+)\)/, makeLink("$2", "$1"))
        // Inline code
        .replace(/`([^`]+\S)`/g, (_, code) => {
            return `<code class="inline">${code}</code>`;
        });
}

module.exports = composePost;
