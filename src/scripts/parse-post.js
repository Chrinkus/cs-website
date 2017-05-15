/* Parse Post
 *
 * parsePost takes an html template and post object. The head and body are
 * destructured out of the post object, nodes are created with content to be
 * swapped into the template.
 *
 * sectionPost takes the post body array and inserts its entries into
 * appropriate tags. makeTitle is used to parse "#" style headers into
 * equivalent heading tags.
 *
 * TODO
 * - change out `Blog Chrinkus` for config reference
 * - add appropriate attribute to <date>
 * - expand markdown pattern recognition to bold, italics & code
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
