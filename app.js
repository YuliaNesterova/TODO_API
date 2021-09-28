//const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
//const cors = require('cors');
//const todosRouter = require('./routes/todos');
import todosRouter from './routes/todos.js';
const app = express();

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('*', cors);

app.use('/', todosRouter);

app.listen(PORT, () => {});
