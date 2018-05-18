function indexHandler(req, res) {
  return res.send('Your browser is not supported.');
};

module.exports = {
  routeKeyName: 'wwwBrowserSupport',
  method: 'GET',
  path: '/browser-support/',
  routeHandler: indexHandler,
};
