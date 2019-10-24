const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const middleware = require('./utils/middleware');
const userRouter = require('./controller/users');
const colorRouter = require('./controller/colors');

require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Connected to MongoDB'))
  .catch((error) => console.log('Could not connect to MongoDB: ', error.message));

app.use(bodyParser.json());
app.use(helmet());
app.use(express.static('dist'));

app.use('/api', userRouter);
app.use('/api', colorRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
