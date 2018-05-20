const {BUILD, NAME_SPACE} = require('../../../resource/').APP_CONSTANT;
const {join} = require('path');


function indexHandler(req, res) {
  require(join(process.cwd(), BUILD.MARKUP_PAGE_DIST + 'home/index.marko')).render({
    pageTitle: res[NAME_SPACE.RESPONSE_CONTEXT].meta.pageMeta.title,
    pageDescription: res[NAME_SPACE.RESPONSE_CONTEXT].meta.pageMeta.description,
    year: res[NAME_SPACE.RESPONSE_CONTEXT].meta.global.year(),
  }, res);
};

module.exports = {
  routeKeyName: 'wwwHome',
  method: 'GET',
  path: '/',
  routeHandler: indexHandler,
};
