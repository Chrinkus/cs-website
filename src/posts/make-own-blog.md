title: Project - DIY Blog Generator
author: Chris Schick
date: June 5, 2017
img: blog_img.jpg
alt: A composite picture of the HTML5, CSS3, ECMAScript and Node.js logos
textColor: Snow
bgColor: #2db92d
teaser: A great way to keep your learning on track is to blog about your subject. If your subject happens to be Web Development, take your education to the next level and generate your own blog using JS, HTML/CSS & Node.

---

This is a series on how to build your own single-page blog generator. The steps are as follows:

1. Write a single mock page, open it in browser
2. Move content to post.txt file, use Node.js to read it and print to console
3. Use JavaScript to parse post.txt file and inject into html node strings
4. Make a second post.txt file, modify JavaScript to work through multiple posts
5. Use CSS to layout page

As with everything I do, the above represents the intended layout, variations to this path may occur.

## The Pitch

You're curious about blogs. You've likely sourced someone else's blog to help you answer a question or fill out your understanding of a new language feature. You learned from them, maybe others can learn from you.

Or perhaps you're already writing your own blog. You've used one of the many blog platforms and have a few JavaScript related posts on there. Good stuff! If I have comments working by the time you read this, leave a link to your blog below.

Whether you're an experienced blogger or not, the value of keeping a blog to document your learning is great. Anyone who is learning to program eventually encounters frustration when faced with a less-than-intuitive language API. For me that was the `Date()` object. And event listeners. And drum synthesis with `WebAudio`, `Promises`, Node.js, etc.

## The Point

The point is, if YOU had trouble and felt like a fool, OTHER people have run into the same walls. You can read someone else's story, use it to shape your own, then write about it so hopefully the next person to get stuck has that much more material to help them through.

So we've covered a few reasons why to write a blog. Now if you like you can go off and create a WordPress account, pick through some templates and start posting pictures of your attack-Corgi. If you're creating a gardening blog, a quilting blog, or a jogging blog then using a third party blog generator is an excellent idea. However, if you're going to use your blog to talk about JavaScript, HTML, or CSS then there is another, much more rewarding path to take.

# Write your own blog generating software

As projects go you won't find many that incorporate JavaScript, HTML and CSS together to produce such satisfying output. The only library you'll need is Node.js to handle your file management. I've learned a great deal from online courses that teach skills in JS, HTML and CSS separately, but always felt a missing step was the blending of those skills into a single, glorious product. Though it is likely that such projects are available behind a paywall.

If you already have a beefy blog that you don't want to give up that's ok, you can still at least go through the motions of generating your own and THEN write about your experience on your fancy WixPresser page.

### What you will need

1. An intermediate understanding of JavaScript (ES5). Any newer features that I use will be briefly discussed.
2. A basic understanding of HTML and CSS. We will be using HTML5 semantic tags but they are relatively easy to pick up if you haven't used them before.
3. [Node.js](https://nodejs.org/) installed on your system. Though we won't necessarily require the latest version its still a good idea to keep your Node.js up to date. If you're unfamiliar with Node.js I will discuss it at the end of this post.
4. Either a basic understanding of the command line or a willingness to learn one. For a quality introduction to the command line, check out [Codecademy](https://www.codecademy.com/learn/learn-the-command-line).

## Lets get started

Our project will start with a single page. Let's create a directory and an index file. When you eventually host your site, a browser will look for an `index.html` file to display so its usually good to make one. The below is how to do this from the command line on Mac or Linux however you can easily click your way through these steps in the Windows file manager.

```command
$ mkdir diy-blog
$ cd diy-blog
$ touch mock-index.html
```

The first thing we'll do is create a basic mock-up for our blog main page. We'll stick to a single static page for now and grow the blog when the time is right. Below is a simple HTML page that will serve as our first target for blog generation. Feel free to change the `title` and `h1` tags to anything that better represents your interests here.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf8">
        <title>Epic Tech Blog</title>
    </head>
    <body>
        <h1>My Epic Tech Blog</h1>
    </body>
</html>
```

The following is our first blog post. It's simple and short but it will do the job for now. This is the format for our first few posts. Paste the following code below the `h1` element in your blog body.

```html
<article>
    <h1>Reading API Docs</h1>
    <p>One skill you need is to be able to track down, read and make
    sense of API documents. Also, resources such as the W3CSchools or
    Mozilla Developer Network are useful for day-to-day lookups.</p>
</article>
```
Notice that we are not using `div`'s anymore. HTML5 added severl new semantically named tags that have inherent behaviours according to their typical usage. 

After the above article has been added to your `mock-index.html` file, save it, and lets see what it looks like in the browser.

```command
$ open mock-index.html
```

Either type the above in your terminal or just open your favorite browser, click the "File" drop down menu and select "Open file..". In the provided window, navigate to your "diy-blog" and click "Open".

..And that's your target. It's kind of plain, uses an ugly font and stretches right across the page. If this is your first HTML page don't be disappointed, this is what all websites look like underneath their CSS. Very soon we will look at ways to make it beautiful.

## For next time

In the next few articles we will create separate files for each post and use javascript to inject the articles into an HTML template. But we only have one post, so for next time use the provided article format to write 2 more posts and paste them below the provided article. Make them yours, write briefly about things that interest you. If you "Lorem ipsum" them I will know and the internet kittens will cry.

### A word about Node.js

JavaScript, HTML and CSS are common tools that can be used to create pages and applications without the need to download external resources or libraries. One of the things that is missing from this toolkit is the ability to navigate your local file structure. Node.js allows us to do that.

To get Node.js on your system, go to [nodejs.org](https://nodejs.org/) and locate the Download section (it should be on the main page, big green button). Choose your download, either will work for our purposes, and follow the installation instructions provided. When complete you can type the following in your command line to ensure it has been installed properly:
```command
$ node -v
```
Until next time, feel free to read some documentation, watch a YouTube video about Node, or tryout some of the workshoppers at nodeschool.io. When we do start to use Node, explanations will be given as well as all necessary code examples.
