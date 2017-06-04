title: Parsing Inline Code
author: Chris Schick
date: June 1, 2017
img: 
alt: 
textColor: Crimson
bgColor: CornflowerBlue
teaser: It's hard to write an effective blog about programming without the ability to share code examples.

---

I have a few post ideas in the works but they all require the ability to parse code examples. Today I get down to attempting this. As far as I can tell, there are two ways in which I'll want to share the code, inline snippets, and in blocks.

# First Attempt

Initially, I'd like to attack the inline code need. It seems simple enough, just use a `regex`. Right? Hopefully "regex" was displayed in some mono-font with a different background. Let's try another, like `document.createElement("code");`.

Success!

## The Meat

To represent code I added a function into the paragraph parser that looked for the markdown characters `` and replaced them with the containing characters in mono with some color effects to highlight their importance. Once again I dipped into the underworld of regular expressions to replace text and it has worked well so far.

Looking forward to that one `string` that breaks my `regex`.

## Step Two: Blocks

Next up will be parsing out a whole block of code. This is also an opportunity to add some syntax highlighting down the road.
