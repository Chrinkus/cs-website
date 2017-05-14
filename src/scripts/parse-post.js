/* Parse Post
 *
 * Takes an html template and a post object. Parses post object content into
 * html and inserts it into template. Also accesses post head content and fills
 * in as needed.
 */

function parsePost(template, post) {
    "use strict";

    const { head, body } = post;

    const title = createNode("title", `Blog Chrinkus | ${head.title}`),
          header = createNode("header",
                       createNode("h1", head.title) +
                       createNode("date", `${head.author}, ${head.date}`));
          post = sectionPost(body);

    return template.replace("<!-- title -->", title)
                   .replace("<!-- header -->", header)
                   .replace("<!-- post -->", post);
}

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>`;
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

module.exports = parsePost;
