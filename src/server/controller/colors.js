const colorRouter = require('express').Router();
const Color = require('../models/color');
const User = require('../models/user');

colorRouter.post('/colors', async (request, response, next) => {
  const { body } = request;

  try {
    // get user
    const user = await User.findOne({ user: body.user });

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

module.exports = colorRouter;
