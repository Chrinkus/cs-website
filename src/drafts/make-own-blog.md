title: DIY Blog Generator
author: Chris Schick
date: May 26, 2017
img:
alt: 
textColor: 
bgColor: 
teaser: What's the best blog platform for aspiring developers? WordPress? Blogger? Guess again dipshit, if you're serious about web-design then you owe it to yourself to bake your own cake.

---

A series on how to build your own single-page blog generator 
Steps:
1. Write a single mock page, open it in browser
2. Move content to post.txt file, use Node.js to read it and print to console
3. Use JavaScript to parse post.txt file and inject into html node strings
4. Make a second post.txt file, modify JavaScript to work through multiple posts
5. Use CSS to layout page

Rough Draft
===========

There are many reasons 'why' to write your own blog and there are a few ways in which to go about the actual writing. I'm going to go ahead and assume that you've already got those two points figured out and are now in the business of seeking a platform upon which to write. Your options are many and my purpose here is.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf8">
        <title>Epic Tech Blog</title>
    </head>
    <body>
        <h1>My Epic Tech Blog</h1>
        <article>
            <h1>Reading API Docs</h1>
            <p>One skill you need is to be able to track down, read and make
            sense of API documents. Also, resources such as the W3CSchools or
            Mozilla Developer Network are useful for day-to-day lookups.</p>
        </article>
    </body>
</html>
```
