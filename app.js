const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');
const routeError = require('./routes/error');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = { _id: '5e7481a2c7a9e507b868c0db' };
  next();
});
app.use(routesUsers);
app.use(routesCards);
app.use(routeError);


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
