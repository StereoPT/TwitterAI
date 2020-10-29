const { Router } = require('express');
const { WHOIDS } = require('../config/config');

const router = Router();

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
