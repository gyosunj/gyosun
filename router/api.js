/* eslint new-cap: off */
const express = require('express');
const router = express.Router();
const controllers = require('../route/api/');
const {APP_CONSTANT} = require('../resource/');

router.use((req, res, next)=>{
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router = APP_CONSTANT.ROUTER.API;
  next();
});

Object.keys(controllers).forEach((routeKeyName) => {
  const route = controllers[routeKeyName];
  router.route(route.path)[route.method.toLowerCase()](route.routeHandler);
});

module.exports = router;
