import Markov from 'markov-strings';
import cliProgress from 'cli-progress';
import db from './lib/db';

import {
	tweet,
	getProfile, getTrends, getRandomTrend,
	getTweetsFromTrend, getTrendingStream
} from './lib/twitHandler.js';

const WHOIDS = {
	WORLDWIDE: 1,
	UK: 23424975,
	PORTUGAL: 23424925
};

const LANGUAGES = {
	EN: 'en',
	PT: 'pt'
}

const ANALYZE_AMOUNT = 25;

console.log("[TwitterAI]");

(async () => {
	const trend = await getRandomTrend(WHOIDS.PORTUGAL);
	console.log(" -> " + trend.name);

	const { statuses } = await getTweetsFromTrend(trend.query, LANGUAGES.PT, ANALYZE_AMOUNT);
	db.set(trend.name, statuses).write();
})();