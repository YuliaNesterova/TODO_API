const express = require('express');
const bodyParser = require('body-parser');
const { rootRouter } = require('./routes/root');

const app = express();

const { PORT = 8080 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rootRouter);

app.listen(PORT, () => {});
