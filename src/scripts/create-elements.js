// Collection of HTML elements generated as strings

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
}

function makeImageEle(src, alt) {
    "use strict";

    return `<img src="../style/img/${src}" alt="${alt}"/>`;
}

function makeTimeEle(dateString) {
    "use strict";

    return `<time datetime=${dateString}>${dateString}</time>`;
}

module.exports = { createNode, makeImageEle, makeTimeEle };
