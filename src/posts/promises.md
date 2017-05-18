title: Promise to Return
author: Chris Schick
date: May 10, 2017
img: couple.jpg
teaser: Our intrepid learner tackles asnychronus programming as he strides into the den of the Promise!
---

# Promising into the Wind

Wow. So I decided to get clever with my blog parsing program and eschewed the traditional callback tree for shiny, new ECMAScript Promises. Because they're better. Or easier. Or, at least at the moment, niche. Either way, I did, and though they may be, they weren't, and definitely were. So how did it go?

## First Promise

My first attempt went predictably well. A simple promise to wrap node's fs.readFile function. I can honestly say that I only used the MDN page as a reference and ended up building almost an exact replica of all the promise examples I came across later when trying to figure out why my later promises wouldn't work.

## Follow Up Single

To implement my readFile promise I needed to get some file names out of a directory and thus decided to create a new promise wrapper for the fs.readdir function. This went mostly well, there was arm pumping, and a little mocking of people nearby for not being quite as cool.

## On the Third Day he RETURNED

With two working promises under my belt I decided to jump the shark and implement Promise.all for my finale. Much cursing ensued. It seemed simple enough, promise 2 gave me file names, promise 1 took those names and pledged to return all files in the directory, all that was left was to queue multiple promise 1's and log a big fat array full of blog post data.

Whom the gods wish to destroy they first make javascript programmers.

I didn't really have an iterable list of promises to pass to Promise.all, just an array of file names. I needed to call my first promise on each file and return them all in another array. Map to the rescue! Map takes an array, applies a callback to each element, then spits out a new array. Right?

Except here's the thing, I rarely use the map method. For whatever reason, my regular programming activities have required forEach, reduce, and slice but not often have I found need of map. Well, map has one special requirement that the others do not.

Anyway, long story short (after letting it get long), my inexperience led me to neglect to actually "return" my map callbacks, instead just applying promise 1 to each element and.. leaving them to be garbage collected? Either way, "undefined" was my return value for a good long time till I found my error.

## Lessons Learned

Aaaand that's my debugging story. Turns out promises were quite easy to implement, IF YOU KNOW YOUR JAVASCRIPT. Which I probably do a little better now. *cough*
