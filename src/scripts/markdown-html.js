const { createNode, makeTitle, makeImage,
        makeListItem } = require("./create-ele");

const parseCode     = require("./parse-code");
const parseInline   = require("./parse-inline");

const markdownToHTML = (function() {
    "use strict";
    let openOrdered     = false,
        openUnOrdered   = false,
        openCode        = false,
        language        = "";

    return function(htmlStr, line) {
        if (openCode) {
            // Test for close-code OR handle code
            if (/^`{3}/.test(line)) {
                htmlStr += "</code>";
                openCode = false;
            } else {
                htmlStr += parseCode(line, language) + "<br/>";
            }
            return htmlStr;
        }

        if (openOrdered) {
            // Test for non-list line OR makeListItem
            if (/^\D/.test(line)) {
                htmlStr += "</ol>";
                openOrdered = false;
            } else {
                htmlStr += makeListItem(parseInline(line));
                return htmlStr;
            }
        }

        if (openUnOrdered) {
            // Test for non-list line OR makeListItem
            if (/^[^\-]/.test(line)) {
                htmlStr += "</ul>";
                openUnOrdered = false;
            } else {
                htmlStr += makeListItem(parseInline(line));
                return htmlStr;
            }
        }

        if (/^[^a-zA-Z"'.]/.test(line)) {
            switch (line.charAt(0)) {
                case '#':
                    // Title
                    htmlStr += makeTitle(line);
                    break;
                case '!':
                    // Image
                    htmlStr += line.replace(/^\!\[([\w\s]+)\]\(([^\)]+)\)$/,
                            makeImage("$2", "$1"));
                    break;
                case '`':
                    // Code
                    if (/^`{3}/.test(line)) {
                        openCode = true;
                        language = line.slice(3);
                        htmlStr += `<code class=${language}>`; 
                    }
                    break;
                case '1':
                    // Ordered List
                    if (/^\d+\.\s/.test(line)) {
                        openOrdered = true;
                        htmlStr += "<ol>" + makeListItem(line);
                    }
                    break;
                case '-':
                    // UnOrdered List
                    if (/^-{1}/.test(line)) {
                        openUnOrdered = true;
                        htmlStr += "<ul>" + makeListItem(line);
                    }
                    break;
                default:
                    throw new Error("Un-recognized flag: " + line);
            }

        } else {
            htmlStr += createNode("p", parseInline(line));
        }

        return htmlStr;
    }
}());

module.exports = markdownToHTML;

/*
console.log(markdownToHTML("", "This is a paragraph."));
console.log(markdownToHTML("", "This has `inline code`"));
*/
