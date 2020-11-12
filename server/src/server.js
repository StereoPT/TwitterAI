const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const twitHandler = require('./lib/twitHandler');

const trendsAPI = require('./api/trends')(twitHandler.trends);
const userAPI = require('./api/user')(twitHandler.user);
const middlewares = require('./api/middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
/*
const whitelist = [process.env.CORS_ORIGIN, 'http://192.168.1.7:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};
*/

app.use(cors());
app.use(express.json());

console.log('[TwitterAI]');

app.get('/', (req, res) => {
  res.json({
    message: 'TwitterAI',
  });
});

app.use('/api/trends', trendsAPI);
app.use('/api/user', userAPI);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
