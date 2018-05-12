/* eslint new-cap: off */
const middleware = require('../middleware/');
const express = require('express');
const router = express.Router();
const controllers = require('../route/api/');
const {APP_CONSTANT} = require('../resource/');

let routes = {};

router.use(middleware.resRoute);
router.use((req, res, next)=>{
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].routes = routes;
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router = APP_CONSTANT.ROUTERS.API;
  next();
});

Object.keys(controllers).forEach((routeKeyName) => {
  const route = controllers[routeKeyName];

  routes[routeKeyName] = Object.assign(route, {routeKeyName});
  router.route(route.path)[route.method.toLowerCase()](route.routeHandler);
});

module.exports = router;
