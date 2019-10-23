const apiRouter = require('express').Router();
const User = require('../models/user');

apiRouter.get('/users/:user', async (request, response, next) => {
  const { user } = request.params;

  try {
    const downloadedUser = await User.findOne({ user }).populate('color');

    // return error if null
    if (downloadedUser === null) {
      response.status(404).json({ error: 'user does not exists' });
      return;
    }
    response.json(downloadedUser.toJSON());
  } catch (exception) {
    next(exception);
  }
});

apiRouter.post('/users', async (request, response, next) => {
  const { body } = request;

  try {
    // create user
    const user = new User({
      user: body.user
    });

    // save to database and return response
    const savedUser = await user.save();
    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

module.exports = apiRouter;
