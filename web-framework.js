const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')();
const middleware = require('./middleware/');
const router = require('./router/');
const APP_CONSTANT = require('./resource/').APP_CONSTANT;
const config = require('./config');
const express = require('express')();
const helmet = require('helmet');
const envName = process.env.NODE_ENV;

// express.use(helmet());
express.use(middleware.logger());
express.use(bodyParser.urlencoded({extended: false}));
express.use(bodyParser.json({limit: '100kb'}));
express.use(cookieParser);
express.use(require('compression')());

express.use((req, res, next) => {
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG] = config[envName];
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].envName = envName;
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT] = {};
  next();
});

express.use('/', router.www);
express.use('/api', router.api);

express.use(middleware.errHandler.four04);
express.use(middleware.errHandler.defaultHandler);

module.exports = express;
