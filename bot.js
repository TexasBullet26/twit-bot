/** Log 'The bot is starting' to the console. */
console.log('The bot is starting');

/** Import the twit module. */
var Twit = require('twit');

/** Authenticate by importing the `config.js` file with the API keys. */
var config = require('./config');

/** Object that connects to Twitter. */
var T = new Twit(config);

/** Search for 2 tweets with the word 'atmosphere'. */
var params = {
  q: 'atmosphere',
  count: 2
}

/** Trigger the get and search Twitter for Tweets. */
T.get('search/tweets', params, gotData);

/** Function that will be triggered when the data has been returned from the API. */
function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
  console.log(data);
}
