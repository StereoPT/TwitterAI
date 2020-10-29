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

async function searchTweets(trend, lan, amount) {
  const { data } = await T.get('search/tweets', { q: trend, lang: lan, count: amount });
  return data;
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
  },
  search: {
    searchTweets,
  },
  user: {
    getProfile,
  },
};
