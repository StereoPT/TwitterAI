const { Router } = require('express');
const { SCREEN_NAME } = require('../config/config');

const router = Router();

module.exports = ({ getProfile }) => {
  router.get('/:screenName?', async (req, res, next) => {
    const screenName = req.params.screenName || SCREEN_NAME;

    try {
      const user = await getProfile(screenName);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
