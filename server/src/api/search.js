const { Router } = require('express');
const { LANGUAGES, ANALYZE_AMOUNT } = require('../config/config');

const router = Router();

module.exports = ({ searchTweets }) => {
  router.get('/:trend', async (req, res, next) => {
    const { trend } = req.params;
    const lang = req.query.lang || LANGUAGES.PT;
    const amount = req.query.amount || ANALYZE_AMOUNT;

    try {
      const tweets = await searchTweets(trend, lang, amount);
      res.json(tweets);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
