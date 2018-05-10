/* eslint new-cap: off */
const middleware = require('../middleware/');
const express = require('express');
const router = express.Router();
const controllers = require('../app/www/');
const {APP_CONSTANT} = require('../resource/');

let routes = {};

if (process.env.NODE_ENV === APP_CONSTANT.NODE_ENV.DEVELOPMENT) {
  router.use(express.static('static', {maxAge: 'no-cache'}));
  router.use(express.static('dist', {maxAge: 'no-cache'}));
} else {
  router.use(express.static('static', {maxAge: '1m'}));
  router.use(express.static('dist', {maxAge: '1y'}));
}

router.use(middleware.resRoute);
router.use((req, res, next)=>{
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].routes = routes;
  next();
});
router.use(middleware.resMeta);

Object.keys(controllers).forEach((routeKeyName) => {
  const route = controllers[routeKeyName];

  routes[routeKeyName] = Object.assign(route, {routeKeyName});
  router.route(route.path)[route.method.toLowerCase()](route.routeHandler);
});

router.use(middleware.errHandler.www.four04);
router.use(middleware.errHandler.www.defaultHandler);

module.exports = router;
