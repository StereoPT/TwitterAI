import db from './lib/db';

import {
	tweet,
	getProfile, getTrends, getRandomTrend,
	getTweetsFromTrend, getTrendingStream
} from './lib/twitHandler.js';

const WHOIDS = {
	WORLDWIDE: 1, UK: 23424975, PORTUGAL: 23424925
};

const LANGUAGES = {
	EN: 'en', PT: 'pt'
}

const ANALYZE_AMOUNT = 25;

console.log("[TwitterAI]");

(async () => {
	const trend = await getRandomTrend(WHOIDS.PORTUGAL);
	console.log(" -> " + trend.name);

	const { statuses } = await getTweetsFromTrend(trend.query, LANGUAGES.PT, ANALYZE_AMOUNT);
	let tweets = statuses.map((eachTweet) => {
		return CleanTweet(eachTweet);
	});

	db.set(trend.name, tweets).write();
})();

function CleanTweet(eachTweet) {
	console.log(eachTweet);
	let tweetToSave = eachTweet.text;

	if(eachTweet.truncated && eachTweet.extended_tweet) {
        tweetToSave = eachTweet.extended_tweet.full_text;
	}
	
	if(eachTweet.retweeted_status) {
        tweetToSave = eachTweet.retweeted_status.text;
        if(eachTweet.retweeted_status.truncated && eachTweet.retweeted_status.extended_tweet) {
            tweetToSave = eachTweet.retweeted_status.extended_tweet.full_text;
        }
	}
	
	if(tweetToSave.indexOf('https://t.co/') != -1) {
        tweetToSave = tweetToSave.split('https://t.co/')[0];
	}
	
	if(tweetToSave.startsWith('@')) {
        tweetToSave = tweetToSave.split(' ').splice(1).join(' ');
    }

	return tweetToSave;
}