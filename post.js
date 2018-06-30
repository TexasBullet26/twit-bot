/** Log 'The bot is starting' to the console. */
console.log('The bot is starting');

/** Import the twit module. */
var Twit = require('twit');

/** Authenticate by importing the `config.js` file with the API keys. */
var config = require('./config');

/** Object that connects to Twitter. */
var T = new Twit(config);

/** Tweet object with one parameter. */
var tweet = {
  status: 'Testing #twitbot from node.js'
}

/** Post to the Twitter APIs statuses update, posting parameter in tweet object. */
T.post('statuses/update', tweet, tweeted);

/** Callback function when finished with post. */
function tweeted(err, data, response) {
  if (err) {
    console.log('Something went wrong with tweeted!');
  } else {
    console.log('tweeted worked!');
  }
}
