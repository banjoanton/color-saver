const apiRouter = require('express').Router();
const User = require('../models/user');

apiRouter.get('/users/:user', async (request, response, next) => {
  const { user } = request.params;

  try {
    const downloadedUser = await User.findOne({ user });
    response.json(downloadedUser.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = apiRouter;
