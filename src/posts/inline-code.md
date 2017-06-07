title: Parsing Inline Code
author: Chris Schick
date: June 1, 2017
img: syntax.jpg
alt: A block of code with syntax highlighting
textColor: DimGray
bgColor: LightSkyBlue
teaser: It's hard to write an effective blog about programming without the ability to share code examples.

---

I have a few post ideas in the works but they all require the ability to parse code examples. Today I get down to attempting this. As far as I can tell, there are two ways in which I'll want to share the code, inline snippets, and in blocks.

# First Attempt

Initially, I'd like to attack the inline code need. It seems simple enough, just use a `regex`. Right? Hopefully "regex" was displayed in some mono-font with a different background. Let's try another, like `document.createElement("code");`.

Success!

## The Meat

To represent code I added a function into the paragraph parser that looked for the markdown characters \`\` and replaced them with the containing characters in mono with some color effects to highlight their importance. Once again I dipped into the underworld of regular expressions to replace text and it has worked well so far.

Looking forward to that one `string` that breaks my `regex`.

## Step Two: Blocks

Next up will be parsing out a whole block of code. This is also an opportunity to add some syntax highlighting down the road.

Let's use the following as a test:
```javascript
const name = "Chris",
      age = 38;

for (let i = 0; i < age; i++) {
    console.log("Happy Birthday");
}
```

I can't wait to see how it looks!

## Step Three: Success!!

WOW! That ended up working out well. I went back and re-read the Regular Expression chapters in Crockford's Good Parts and Haverbeke's Eloquent JS to help out with the pattern hunting. In the end I feel a lot more confident with RegEx's and that's either a good thing or a very dangerous thing..

Let's do another snippet just for fun! Something game related because its been too long..

```javascript
const addAttack = (state) => ({
    attack: (target) => {
        target.hurt(state.atkPwr);
    }
});
 
const addHurt = (state) => ({
    hurt: (damage) => {
        state.hp -= Math.ceil(state.armor / 100 * damage);
    }
});
 
const player = (name) => {
    const state = {
        name,
        hp:     100,
        atkPwr: 12,
        armor:  4
    };
    
    return Object.assign(
        {},
        addAttack(state),
        addHurt(state)
    );
};
 
const chris = player("Chris");
const dave  = player("Dave");
 
chris.attack(dave);
```

## Moving On..

Now that I have this tool working, I can get down to some serious posts. Up until now these have mostly been filler entries while I worked out how to set up my blog. Going forward the writing should be a little more polished and hopefully have some actual "content".
