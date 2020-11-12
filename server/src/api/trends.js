const { Router } = require('express');
const { WHOIDS, LANGUAGES, ANALYZE_AMOUNT } = require('../config/config');

const router = Router();

module.exports = ({ getTrends, getRandomTrend, getTweetsFromTrend }) => {
  router.get('/:whoid?/generate', async (req, res, next) => {
    const whoid = req.params.whoid || WHOIDS.PORTUGAL;
    const lang = req.query.lang || LANGUAGES.PT;
    const amount = req.query.amount || ANALYZE_AMOUNT;

    try {
      const randomTweet = await getTweetsFromTrend(whoid, lang, amount);
      res.json(randomTweet);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:whoid?/random', async (req, res, next) => {
    const whoid = req.params.whoid || WHOIDS.PORTUGAL;

    try {
      const trend = await getRandomTrend(whoid);
      res.json(trend);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:whoid?', async (req, res, next) => {
    const whoid = req.params.whoid || WHOIDS.PORTUGAL;

    try {
      const trends = await getTrends(whoid);
      res.json(trends);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
