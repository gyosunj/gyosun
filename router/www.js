/* eslint new-cap: off */
require('marko/express');
require('marko/node-require');
const middleware = require('../middleware/');
const express = require('express');
const router = express.Router();
const routes = require('../app/www/');
const {APP_CONSTANT} = require('../resource/');
const markoRefresh = require('../marko-reload');

if (process.env.NODE_ENV === APP_CONSTANT.NODE_ENV.DEVELOPMENT) {
  router.use(express.static('static', {maxAge: 'no-cache'}));
  router.use(express.static('dist', {maxAge: 'no-cache'}));
  markoRefresh();
} else {
  router.use(express.static('static', {maxAge: '1m'}));
  router.use(express.static('dist', {maxAge: '1y'}));
}

router.use(middleware.resRoute);
router.use(middleware.resMeta);

Object.keys(routes).forEach((routeKeyName) => {
  const route = routes[routeKeyName];
  router.route(route.path)[route.method.toLowerCase()](route.handler);
});

router.use(middleware.errHandler.www.four04);
router.use(middleware.errHandler.www.defaultHandler);

module.exports = router;
