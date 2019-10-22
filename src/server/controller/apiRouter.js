const apiRouter = require('express').Router();
const User = require('../models/user');

apiRouter.get('/hello', (req, res) => res.send({ hello: 'world' }));

apiRouter.get('/user', async (request, response) => {
    const users = await User.find({});
    response.json(users.map(user => user.toJSON()));
});

module.exports = apiRouter;
