const {BUILD, NAME_SPACE} = require('../../../resource/').APP_CONSTANT;
const {join} = require('path');

function indexHandler(req, res) {
  require(join(process.cwd(), BUILD.MARKUP_PAGE_DIST + 'marko/index.marko')).render({
    pageName: '"marko example"',
    pageTitle: res[NAME_SPACE.RESPONSE_CONTEXT].meta.pageMeta.title,
    pageDescription: res[NAME_SPACE.RESPONSE_CONTEXT].meta.pageMeta.description,
  }, res);
};

module.exports = {
  method: 'GET',
  path: '/marko/',
  routeHandler: indexHandler,
  routeKeyName: 'wwwMarko',
};
