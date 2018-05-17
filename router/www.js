/* eslint new-cap: off */
require('marko/express');
require('marko/node-require');
const middleware = require('../middleware/');
const express = require('express');
const router = express.Router();
const controllers = require('../route/www/');
const {APP_CONSTANT} = require('../resource/');
const markoRefresh = require('../marko-reload');

let routes = {};

if (process.env.NODE_ENV === APP_CONSTANT.NODE_ENV.DEVELOPMENT) {
  router.use(express.static(APP_CONSTANT.STATIC_DIRECTORY.ROOT, {maxAge: 'no-cache'}));
  router.use(express.static(APP_CONSTANT.STATIC_DIRECTORY.ASSET, {maxAge: 'no-cache'}));
  markoRefresh();
} else {
  router.use(express.static(APP_CONSTANT.STATIC_DIRECTORY.ROOT, {maxAge: '1m'}));
  router.use(express.static(APP_CONSTANT.STATIC_DIRECTORY.ASSET, {maxAge: '1y'}));
}

router.use((req, res, next)=>{
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].routes = routes;
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router = APP_CONSTANT.ROUTER.WWW;
  next();
});

Object.keys(controllers).forEach((routeKeyName) => {
  const route = controllers[routeKeyName];

  routes[route.routeKeyName || routeKeyName] = Object.assign({routeKeyName}, route);
  router.route(route.path)[route.method.toLowerCase()](middleware.resRoute(route), middleware.resMeta, route.routeHandler);
});

module.exports = router;
