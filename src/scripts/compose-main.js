const createNode    = require("./createNode");

function composeMain(template, topFive, config) {
    "use strict";
    const title = createNode("title", config.title),

          hgroup = createNode("hgroup",
                       createNode("h1", config.title) +
                       createNode("h2", config.subtitle)),

          previews = topFive.reduce((previewStr, postHead) => {
                  return previewStr += getArticlePreview(postHead);
              }, "");

    return template.replace("<!-- title -->", title)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- previews -->", previews);

}

function getArticlePreview(postHead) {
    "use strict";
    const img = makeImageEle(postHead.img, postHead.alt),

          text = createNode("section",
                     createNode("h1", postHead.title) +
                     createNode("p", postHead.teaser) +
                     createNode("footer", "<hr>" +
                         createNode("p", makeTimeEle(postHead.date))));

    return createNode("article", img + text);
}

function makeImageEle(src, alt) {
    "use strict";

    return `<img src=${src} alt=${alt}/>`;
}

function makeTimeEle(dateString) {
    "use strict";

    return `<time datetime=${dateString}>${dateString}</time>`;
}
