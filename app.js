import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todosRouter from './routes/todos.js';

const app = express();

app.use('*', cors());

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', todosRouter);

app.listen(PORT, () => {});
