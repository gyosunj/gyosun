const {join} = require('path');

function indexHandler(req, res, next) {
<<<<<<< HEAD
  res.sendFile(path.join(process.cwd(), 'view/home/index.html'));
=======
  res.sendFile(join(process.cwd(), 'view/home/index.marko'));
>>>>>>> retry marko
}

module.exports = {
  method: 'GET',
  path: '/',
  routeHandler: indexHandler,
};
