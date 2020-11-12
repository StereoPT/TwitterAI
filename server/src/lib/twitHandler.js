const Twit = require('twit');
const shuffle = require('shuffle-array');
const twitterConfig = require('../config/TwitterConfig');

const T = new Twit(twitterConfig);

async function getTrends(woeid) {
  const { data } = await T.get('trends/place', { id: woeid });
  return data[0].trends;
}

async function getRandomTrend(woeid) {
  const trends = await getTrends(woeid);
  return shuffle.pick(trends);
}

function CleanTweet(eachTweet) {
  console.log(eachTweet);
  let tweetToSave = eachTweet.text;

  if (eachTweet.truncated && eachTweet.extended_tweet) {
    tweetToSave = eachTweet.extended_tweet.full_text;
  }

  if (eachTweet.retweeted_status) {
    tweetToSave = eachTweet.retweeted_status.text;
    if (eachTweet.retweeted_status.truncated && eachTweet.retweeted_status.extended_tweet) {
      tweetToSave = eachTweet.retweeted_status.extended_tweet.full_text;
    }
  }

  if (tweetToSave.indexOf('https://t.co/') !== -1) {
    // eslint-disable-next-line prefer-destructuring
    tweetToSave = tweetToSave.split('https://t.co/')[0];
  }

  if (tweetToSave.startsWith('@')) {
    tweetToSave = tweetToSave.split(' ').splice(1).join(' ');
  }

  return tweetToSave;
}

async function getTweetsFromTrend(woeid, lan, amount) {
  const randomTrend = await getRandomTrend(woeid);
  const { data } = await T.get('search/tweets', { q: randomTrend.query, lang: lan, count: amount });
  const tweets = data.statuses.map((eachTweet) => CleanTweet(eachTweet));

  return tweets;
}

async function tweet(msg) {
  const tweetObj = { status: msg };

  const { data } = await T.post('statuses/update', tweetObj);
  return data;
}

async function getProfile(profileName) {
  const { data } = await T.get('users/show', { screen_name: profileName });
  return data;
}

module.exports = {
  T,
  tweet,
  trends: {
    getTrends,
    getRandomTrend,
    getTweetsFromTrend,
  },
  user: {
    getProfile,
  },
};
