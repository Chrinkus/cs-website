function parseCode(line) {
    "use strict";
    
    if (/["'`]/.test(line)) {
        return parseString(line);
    } else {
        return numFinder(keyFinder(line));
    }
}

function parseString(line) {
    "use strict";
    let pre, str, post = "";

    switch (line.charAt(line.search(/["'`]/))) {
        case '"':
            [, pre, str, post] = line.match(/^([^"]*)("[^"]*")(.*)$/);
            break;
        case "'":
            [, pre, str, post] = line.match(/^([^']*)('[^']*')(.*)$/);
            break;
        case '`':
            // handle template string
            break;
        default:
            console.error("parseString() couldn't find string");
    }

    return parseCode(pre) + `<span class="string">${str}</span>` +
        parseCode(post);
}

function numFinder(line) {
    "use strict";

    function numSwapper(word) {
        return word.replace(/(^|[^\w])(-?\d+(?:\.\d+)?(?:e-?\d+)?)/i, 
                "$1<span class=\"number\">$2</span>")
    }

    return line
        .split(" ")
        .map(numSwapper)
        .join(" ");
}

function keyFinder(line) {
    "use strict";

    function checkForAlpha(word) {
        let rest = word,
            pre, alpha, accum = "";

        while (/\w+/.test(rest)) {
            const [, pre, alpha, tail] = rest.match(/^(\W*)(\w+)(.*)$/);
            accum += pre + replaceKeyWords(alpha);
            rest = tail;
        }

        return accum + rest;
    }

    return line
        .split(" ")
        .map(checkForAlpha)
        .join(" ");
}

function replaceKeyWords(word) {
    "use strict";
    let spanClass = "";

    switch (word) {
        case 'function':
        case 'Promise':
            spanClass = "function";
            break;
        case 'document':
        case 'window':
        case 'console':
            spanClass = "webAPI";
            break;
        case 'Object':
        case 'Function':
        case 'Array':
        case 'Boolean':
        case 'Error':
            spanClass = "fundamental";
            break;
        case 'var':
        case 'let':
        case 'const':
            spanClass = "declaration";
            break;
        case 'break':
        case 'continue':
        case 'if':
        case 'else':
        case 'switch':
        case 'throw':
        case 'try':
        case 'catch':
        case 'do':
        case 'while':
        case 'for':
        case 'in':
        case 'of':
        case 'return':
            spanClass = "controlFlow";
            break;
        default:
            // no key detected
    }

    if (spanClass) {
        return `<span class="${spanClass}">${word}</span>`;
    } else {
        return word;
    }
}

module.exports = parseCode;

console.log(parseCode("var x = 10;"));
console.log(parseCode("let name1 = \"Chris\";"));
console.log(parseCode("for (var i = 0; i < \"name\".length; ++i) {"));
console.log(parseCode("console.log(\"Happy Birthday!\");"));
