const {join} = require('path');

function indexHandler(req, res, next) {
  res.sendFile(join(process.cwd(), 'view/home/index.html'));
}

module.exports = {
  method: 'GET',
  path: '/',
  routeHandler: indexHandler,
};
