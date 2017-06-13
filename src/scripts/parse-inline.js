const { makeLink } = require("./create-ele");

function parseInline(line) {
    "use strict";

    return line
        // Inline links
        .replace(/\[([\w.]+)\]\(([^\)]+)\)/, makeLink("$2", "$1"))
        // Inline code
        .replace(/`([^`]+\S)`/g, (_, code) => {
            return `<code class="inline">${code}</code>`;
        });
}

module.exports = parseInline;
