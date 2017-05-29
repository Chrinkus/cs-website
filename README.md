# Blog Generator

This code generates a blog based on the markdown files in the directory `/src/posts/`. The layout is predetermined by the HTML files in the `/src/template/` directory and the CSS in the `/site/style/css/` directory.

To generate the static pages, write a post using the `draft.md` boilerplate in the templates directory and save it to posts. Then run the following from the command line:
```
$ node ./src/scripts/write-blog.js
```

The current state of the site can be seen in the header link above.
