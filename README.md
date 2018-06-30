# Twit-Bot (Building a Twitter Bot from Node.js)
---
A simple Twitter bot that uses Node.js to automate tweets. Good for beginners if you want to learn some Node.js.

## Goal
---
From the command line / terminal, how can you connect and authenticate to the Twitter API and get information such as:
  * Searching Twitter
  * Look for who has replied to you on Twitter
  * Post Tweets yourself back to Twitter
  * and much more

Make a program that will run every x minutes or x hours and post a tweet automatically based on some other type of algorithmic set of rules that you may want to make.

Use npm (node package manager) to spin up a larger Node project and use a Twitter package to connect to the Twitter API.

### Things to do before continuing
---
  * Download Node.js
  * Get it Installed
  * Figure out how to get to the command line / terminal
  * Type Node into your terminal
  * Enter some JavaScript that will run some small JavaScript program that just spits something back to the console 
  
**Next:** How to use npm (node package manager) to spin up a larger Node project and use a Twitter package to connect to the Twitter API.
---

## npm (node package manager)
---
How do you install an npm package?
  - `npm install <package-name>`

One of the things that happens when you're working on a Node project is you want to have this file called `package.json`.

A `package.json` is a file that holds your projects "settings", "configuration", and other dependencies you need to use.
  
### Things to do before continuing
---
  * Create a package.json file using the `npm init` command in your terminal
  * `npm install twit --save` command saves a reference to the twit package to your package.json file as a dependency
  * Add `"start": node bot.js` to your scripts in your package.json file. Doing so will enable you to run `npm start` which will run `node bot.js` for you.
---

[Glenn Lanzer III](https://TexasBullet26.github.io)

Thank you to Daniel Shiffman for explaining everything so well in his videos. You can find him on [Youtube]() and [Github](https://github.com/shiffman).
Thank you to [ttezel](https://github.com/ttezel/twit) for creating the twit package.
