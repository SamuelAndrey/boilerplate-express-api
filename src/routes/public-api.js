const express = require('express');
const exampleController = require('../controllers/v1/example-controller');

const publicRouter = express.Router();

publicRouter.get('/api/v1/example', exampleController.example);

module.exports = publicRouter;