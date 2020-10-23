import twit from 'twit';
import shuffle from 'shuffle-array';

import twitterConfig from '../TwitterConfig';

const T = new twit(twitterConfig);

export async function tweet(msg) {
    let tweetObj = { status: msg }

    const { data } = await T.post('statuses/update', tweetObj);
    return data;
}

export async function getProfile(profileName) {
    const { data } = await T.get('users/show', { screen_name: profileName });
    return data;
}

export async function getTrends(woeid) {
    const { data } = await T.get("trends/place", { id: woeid });
    return data[0].trends;
}

export async function getRandomTrend(woeid) {
    const trends = await getTrends(woeid);
    return shuffle.pick(trends);
}

export async function getTweetsFromTrend(trend, lan, amount) {
    const { data } = await T.get('search/tweets', { q: trend, lang: lan, count: amount });
    return data;
}

export function getTrendingStream(trend, lan) {
    return T.stream('statuses/filter', { track: trend, language: lan });
}

export default T;