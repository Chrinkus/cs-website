(function () {
    "use strict";
    const parentRef = document.getElementById("content"),
          nav       = document.createElement("nav"),
          ul        = document.createElement("ul"),

          homeLink  = document.createElement("a"),
          topLink   = document.createElement("a"),
          nextLink  = document.createElement("a"),

          homeText  = document.createTextNode("< HOME"),
          topText   = document.createTextNode("TOP"),
          nextText  = document.createTextNode("NEXT >");

    homeLink.href = "./main.html";
    topLink.href = "#content";
    nextLink.href = "";

    homeLink.appendChild(homeText);
    topLink.appendChild(topText);
    nextLink.appendChild(nextText);

    [homeLink, topLink, nextLink].forEach(link => {
        const li = document.createElement("li");

        link.className = "pageNav";
        li.appendChild(link);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    parentRef.appendChild(nav);
}());
