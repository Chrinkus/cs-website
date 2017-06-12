const markdownToHTML = (function() {
    "use strict";
    let openOrdered     = false,
        openUnOrdered   = false,
        openCode        = false,
        language        = "";

    return function(line, htmlStr) {
        if (openCode) {
            // Test for close-code OR handle code
        }

        if (openOrdered) {
            // Test for non-list line OR makeListItem
        }

        if (openUnOrdered) {
            // Test for non-list line OR makeListItem
        }

        if (/^[^a-zA-Z"']/.test(line)) {
            switch (line.charAt(0)) {
                case '#':
                    // Title
                    break;
                case '!':
                    // Image
                    break;
                case '`':
                    // Code
                    break;
                case '1':
                    // Ordered List
                    break;
                case '-':
                    // UnOrdered List
                    break;
                default:
                    throw new Error("Un-recognized flag: " + line.charAt(0));
            }

        } else {
            htmlStr += createNode("p", parseInline(line));
        }

        return htmlStr;
    }
}());
