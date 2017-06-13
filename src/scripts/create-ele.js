// Collection of HTML elements generated as strings

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
}

function makeHgroup(head) {
    "use strict";
    const { title, date, textColor, bgColor } = head;

    return `<hgroup style="color:${textColor};background:${bgColor};">` +
               createNode("h1", title) +
               createNode("p", makeTime(date)) +
               "</hgroup>";
}

function makeImage(src, alt) {
    "use strict";

    return `<img src="./style/img/${src}" alt="${alt}"/>`;
}

function makeLink(href, content) {
    "use strict";

    return `<a href="${href}">${content}</a>`;
}

function makeListItem(line) {
    "use strict";
    const [, content] = line.match(/^\d+\.\s(.+)$/);

    return `<li>${content}</li>`;
}

function makeTime(dateString) {
    "use strict";

    return `<time datetime=${dateString}>${dateString}</time>`;
}

function makeTitle(titleSection) {
    "use strict";
    const [, hLevel, titleText] = /^(#+)\s(.*)/.exec(titleSection);

    return createNode(`h${hLevel.length}`, titleText);
}

module.exports = {
    createNode,
    makeHgroup,
    makeImage,
    makeLink,
    makeListItem,
    makeTime,
    makeTitle
};
