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
  router.use(express.static('static', {maxAge: 'no-cache'}));
  router.use(express.static('dist/asset/', {maxAge: 'no-cache'}));
  markoRefresh();
} else {
  router.use(express.static('static', {maxAge: '1m'}));
  router.use(express.static('dist/asset/', {maxAge: '1y'}));
}

router.use(middleware.resRoute);
router.use((req, res, next)=>{
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].routes = routes;
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router = APP_CONSTANT.ROUTERS.WWW;
  next();
});
router.use(middleware.resMeta);

Object.keys(controllers).forEach((routeKeyName) => {
  const route = controllers[routeKeyName];

  routes[routeKeyName] = Object.assign(route, {routeKeyName});
  router.route(route.path)[route.method.toLowerCase()](route.routeHandler);
});

module.exports = router;
