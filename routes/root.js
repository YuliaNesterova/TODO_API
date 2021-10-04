const express = require('express');
const { todosRouter } = require('./todos');

const rootRouter = express.Router();

rootRouter.use('/', todosRouter);

module.exports.rootRouter = rootRouter;