const express = require('express');
const publicRouter = require('../routes/public-api');
const { errorMiddleware } = require("../middlewares/error-middleware");

const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(errorMiddleware);

module.exports = web;
