const {join} = require('path');

function indexHandler(req, res) {
  require(join(process.cwd(), 'view/marko-example/index.marko')).render({
    pageName: 'Marko Example',
  }, res);
};

module.exports = {
  method: 'GET',
  path: '/marko/',
  routeHandler: indexHandler,
};
