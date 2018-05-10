const path = require('path');

function indexHandler(req, res, next) {
  res.sendFile(path.join(process.cwd(), 'view/home/index.html'));
}

module.exports = {
  method: 'GET',
  path: '/',
  routeHandler: indexHandler,
};
