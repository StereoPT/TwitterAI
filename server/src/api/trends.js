const { Router } = require('express');

const router = Router();

const WHOIDS = {
  WORLDWIDE: 1,
  UK: 23424975,
  PORTUGAL: 23424925,
};

/*
const LANGUAGES = {
  EN: 'en',
  PT: 'pt',
};

const ANALYZE_AMOUNT = 25;
*/

module.exports = ({ getTrends, getRandomTrend }) => {
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
