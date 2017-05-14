/* Post Scripts
 *
 * Set href's of links
 * Alter background image?
 */

document.body.onload = init;

function init() {
    "use strict";
    
    loadFont();

    // TEMP
    console.log("Scripts fired");
}

function loadFont() {
    "use strict";

    const head = document.getElementsByTagName("head")[0],
          link = document.createElement("link");

    link.href = "https://fonts.googleapis.com/css?family=Open+Sans:400,700";
    link.rel = "stylesheet";

    head.appendChild(link);
}
