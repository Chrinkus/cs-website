const { createNode, makeImageEle, makeTimeEle } = require("./create-elements");

function composeMain(config, template, topFive) {
    "use strict";
    const title     = createNode("title", config.title),

          hgroup    = createNode("hgroup",
                          createNode("h1", config.title) +
                          createNode("h2", config.subtitle)),

          previews  = topFive.reduce((previewStr, postHead) => {
                          return previewStr += getArticlePreview(postHead);
                      }, ""),

          main      = createNode("main", previews);

    return template.replace("<!-- title -->", title)
                   .replace("<!-- hgroup -->", hgroup)
                   .replace("<!-- main -->", main);

}

function getArticlePreview(postHead) {
    "use strict";
    const img  = makeImageEle(postHead.img, postHead.alt),

          text = createNode("section",
                     createNode("h1", postHead.title) +
                     createNode("p", postHead.teaser) +
                     createNode("footer", "<hr>" +
                         createNode("p", makeTimeEle(postHead.date))));

    return createNode("article", img + text);
}

module.exports = composeMain;
