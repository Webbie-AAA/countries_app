const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./logger');

app.use(cors())
app.use(logger())

module.exports = app;


express.use(startingPath, middleware);
express.METHOD(exactPath, middleware);