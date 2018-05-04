/* eslint new-cap: off */
const middleware = require('../middleware/');
const Router = require('express').Router();
const routes = require('../app/www/');

Router.use(middleware.resRoute);
Router.use(middleware.resMeta);

Object.keys(routes).forEach((routeKeyName) => {
  const route = routes[routeKeyName];
  Router.route(route.path)[route.method.toLowerCase()](route.handler);
});

Router.use(middleware.errHandler.www.four04);
Router.use(middleware.errHandler.www.defaultHandler);

module.exports = Router;
