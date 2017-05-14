const getPosts      = require("./get-posts");
const loadFile      = require("./load-file");
const writeFile     = require("./write-file");

function createNode(tag, content) {
    "use strict";

    return `<${tag}>${content}</${tag}>\n`;
}

function writePostHTML() {
    "use strict";

    Promise.all([

        loadFile("../templates/post.html"),
        getPosts("../posts")

    ]).then(files => {
        const [html, posts] = files;

        posts.forEach(post => {
            parsePostToHTML(html, post);
        });

    }).catch(err => {
        console.error(err);
    });
}

//writePostHTML();

function parsePostToHTML(template, post) {
    "use strict";

    const { head, body } = post;

    const title = createNode("title", `Blog Chrinkus | ${head.title}`),
          header = createNode("header",
                       createNode("h1", head.title) +
                       createNode("p", head.author) +
                       createNode("date", head.date));
          //post = sectionPost(body);
    console.log(title);
}

function sectionPost(content) {
    "use strict";
    return content.reduce((htmlStr, section) => {
        if (charAt(0) === "#")
            htmlStr += makeTitle(section);
        else
            htmlStr += createNode("p", section);
    }, "");
}

function makeTitle(titleSection) {
    "use strict";
    const [, hLevel, title] = /^(#+)\s(.*)/.exec(titleSection);

    return createNode(`h${hLevel.length}`, title);
}
