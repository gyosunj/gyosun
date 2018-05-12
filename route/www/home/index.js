const {MARKUP_PAGE_DIST} = require('../../../resource').APP_CONSTANT.BUILD;
const {join} = require('path');

function indexHandler(req, res) {
  require(join(process.cwd(), MARKUP_PAGE_DIST + 'home/index.marko')).render({
    pageName: 'Marko Example',
  }, res);
};

module.exports = {
  method: 'GET',
  path: '/',
  routeHandler: indexHandler,
};
