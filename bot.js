console.log('The bot is starting');

var Twit = require('twit');  // Import the twit module.

var config = require('./config');  // Authenticates using a different config.js file.
var T = new Twit(config);  // Object that connects to Twitter.
