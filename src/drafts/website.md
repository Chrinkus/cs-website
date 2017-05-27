title: Blog Launch 2017
author: Chris Schick
date: May 26, 2017
img: aws.ico
alt: Amazon Web Services icon
textColor: Snow
bgColor: rgb(77, 77, 77)
teaser: After two years of learning JavaScript and HTML for the purposes of game development, I decided it was time to use the tools for the job they were meant for. The challenge:> design a blog generator that can be used to document my other projects. Lessons were leanred, and glory was achieved.
---

Discuss need for blog, attempts at utilizing other tools, the decision to make own and the incidental learning along the way.

On Thursday, May 25th I launched the very blog you are reading now. The reason for pursuing this project is actually two: to document my game design challenges, decisions and the rationale behind them, and also to take my first steps towards web hosting and eventually multiplayer game design. Along the way I picked up a few more skills and maybe even enjoyed static-page development for the ways it is absolutely NOT like game design.

# Genesis

On April 22 I had attended the Microsoft Global Azure Bootcamp that was put on by the Winnipeg .NET User Group. I was interested in learning about Cloud computing and hoped to see some examples that would apply to game design. Specifically I have been a big fan of the Crackdown series of games from Microsoft and have been getting hyped by the limited info that has been released showcasing massive environmental destruction achieved using such technology. What better place to fit in some extra hype for the game than at an event dedicated to cloud tech?

Well, I guess there is a better place because aside from a Titanfall mention there was little to no game specific examples provided. That's ok though, what WAS presented provided enough inspiration to attempt projects that I hadn't considered previously.

## Exodus

To pursue this project I would have to put my follow-up work on Squares 2 on hold for a bit. Time is limited these days and I've learned in the past that when I attempt too many projects at once I lose. We all lose. (As I sit and write this, my Squares 2 repo hasn't been contributed to in 25 days!)

So I packed up my commits, pushed them, and turned myself towards the wasteland that static web-page development appeared to be.

## The Process

1. Write posts in markdown
2. Create post html template
3. Read in post, parse, and inject content into template
4. Write resulting HTML into new post file
5. Gather 5 most recent posts for previews on main blog page

This worked out well and I was able to get posts happening relatively quickly. There was a rough afternoon working out how to implement Promises but that ended up being a valuable learning experience anyway so, can't complain.

To get anywhere, I would need some data to work with. Not wanting to just fill up a few files with Lorem's I cranked out a few filler posts to work from. Auxilliary learning occurred when I realised I couldn't transfer my thoughts to screen, was a terrible writer, and questioned my whole project.

### Promises and Node.js

I had done an exercise in the NodeSchool Learnyounode workshopper where you needed to queue up a bunch of readFile's asynchronously and print the files afterwards. Thus I was prepared to do what was needed however I had also been interested in learning how to utilize Promises and decided to push myself in that direction.

Though I didn't explicitly set out to, I began to make Promise wrappers for the node.js functions readdir, readFile, and writeFile. All of these wrappers returned a Promise that could be queued up in a large Promise.all() block at the start of my process.

### Parsing Like a Boss

Working through resources like Codecademy, NodeSchool, reading books such as Eloquent JavaScript, watching weekly programming videos like FunFunFunction, there are always Array and String methods that get invoked and chained to produce some kind of formatted output. While impressive, these functions haven't had much use for me in making the limited games I've worked on.

However, ALL of them are suddenly useful when reading, parsing and substituting text. There was a great deal of satisfaction had when chaining string and array methods on my content. It was, it was, just simply... wonderful.

## Intermission

After wrapping Node functions in promises, queuing those promises in a Promise.all, and parsing the output files, I had felt I had worked through the hard part of making a static blog and it really wasn't that bad. All that was left was the HTML & CSS and everyone knows those are barely even considered programming, right?

### HTML Hell

To create my HTML templates I went back and re-did the HTML & CSS course at Codecademy. Actually I think I went through about 3 courses, HTML & CSS, Responsive Design & Deploy a Website. Those three re-activated my understanding of the box model but initial attempts at layouts were still quite difficult to make right. At one point I had a 150 line css file that still wasn't producing the results I was after.

My problem, in hindsight, was trying to build my layout from the text content out. I didn't see it at the time, but I'd work to get a paragraph where I wanted it, then when adjusting the parent element the paragraph would suddenly be a long, narrow column. Very frustrating.

A friend suggested I use the Flexbox Layout module. I usually prefer to not resort to using libraries or third-party modules but a little reading into Flex and I saw that it was becoming part of the CSS3 standard. I attempted to shoehorn my site into a flexbox layout and began to realize I needed to do something drastic to mitigate my constant editing.

Two days ago I decided to start a layout from scratch, this time identiying the parent elements, positioning them appropriately, then moving inwards to the children. This approach allowed me to fine tune the small things as descendants of already correctly laid out larger containers.

Thinking about it now, the approach seems obvious. Perhaps its the kind of thing that gets covered in the first week at some web-design course, but I didn't take that course so no judgements.

### Aside About

The initial layout had a separate page for an "About Me" section as per the usual blog format. In the end there really isn't a whole lot to know, programming-wise so I decided to tuck it into each page as an aside element. Because the aside would be the same on every page, I decided to try making a separate html template file, complete with it's own css, just for the aside element. 

What seemed like a good idea actually worked out pretty well in the end. The main.css file handled the aside's positioning on the page, and the specialized aside.css file concentrated on the actual internal layout of the element. Looking at how well this worked, I could probably do the same thing with the footer element too.

## Deployment

Deploying to AWS was a process and I'd like to go into the details but that's probably better examined in another post after I understand more about what I actually did (there were a LOT of acronyms..).

## Looking Ahead

While I'm extra excited to get back at actually making my next game there are a few lingering needs for my blog. They are, in no particular order:

- add support for markdown emphasis such as bold, underline and italics
- add support for code snippets complete with syntax highlighting
- re-design HTML and CSS to be reactive for mobile reading
- add support for linking within the markdown
- provide a way to view a drafted post in HTML whithout having to process it into posts
- automate my updates to AWS

That's the shortlist for blog features. I'll also want to define a workflow for regular blog posts regarding my dev work too.
