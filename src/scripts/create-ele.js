// Collection of HTML elements generated as strings

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
}

function makeLink(href, content) {
    "use strict";

    return `<a href="${href}">${content}</a>`;
}

function makeImage(src, alt) {
    "use strict";

    return `<img src="./style/img/${src}" alt="${alt}"/>`;
}

function makeTime(dateString) {
    "use strict";

    return `<time datetime=${dateString}>${dateString}</time>`;
}

module.exports = { createNode, makeLink, makeImage, makeTime };
