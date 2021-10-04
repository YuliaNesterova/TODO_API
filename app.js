const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { rootRouter } = require('./routes/root');

const app = express();

app.use('*', cors());

const { PORT = 8080 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rootRouter);

app.listen(PORT, () => {});
