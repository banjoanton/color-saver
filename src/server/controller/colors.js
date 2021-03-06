const colorRouter = require('express').Router();
const Color = require('../models/color');
const User = require('../models/user');

colorRouter.post('/colors', async (request, response, next) => {
  const { body } = request;

  try {
    // get user
    let user = await User.findOne({ user: body.user });

    // if user does not exist, create it
    if (user === null) {
      const newUser = new User({
        user: body.user
      });

      user = await newUser.save();
    }

    // create color
    const newColor = new Color({
      color: body.color,
      user: user._id
    });

    // save to database
    const savedColor = await newColor.save();

    // add to user
    user.colors = user.colors.concat(savedColor._id);
    await user.save();

    // return response
    response.json(savedColor);
  } catch (exception) {
    next(exception);
  }
});

colorRouter.get('/colors', async (request, response, next) => {
  try {
    const colors = await Color.find({}).populate('user');
    response.json(colors.map((u) => u.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

colorRouter.put('/users/:user', async (request, response, next) => {
  const { body } = request;
  const { user } = request.params;

  try {
    const downloadedUser = await User.findOne({ user });
    const userID = downloadedUser._id;
    const deletedColor = await Color.findOneAndDelete({ color: body.color, user: userID });
    response.json(deletedColor);
  } catch (error) {
    next(error);
  }
});

module.exports = colorRouter;
