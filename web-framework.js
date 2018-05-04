const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')();
const middleware = require('./middleware/');
const router = require('./router/');
const {NAME_SPACE} = require('./resource/').APP_CONSTANT;
const config = require('./config');
const express = require('express')();

express.use(bodyParser.urlencoded({extended: false}));
express.use(bodyParser.json({limit: '100kb'}));
express.use(cookieParser);

express.use((req, res, next) => {
  res[NAME_SPACE.RESPONSE_CONFIG] = config[process.env.NODE_ENV];
  res[NAME_SPACE.RESPONSE_CONFIG].envName = process.env.NODE_ENV;
  res[NAME_SPACE.RESPONSE_CONTEXT] = {};
  next();
});
express.use(middleware.logger());

express.use('/', router.www);
// express.use('/api', router.api);

module.exports = express;
