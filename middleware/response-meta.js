const {APP_CONSTANT, meta} = require('../resource/');

module.exports = (req, res, next) => {
  const routeKeyname = res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].route && res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].route.routeKeyName || '';

  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].meta = {
    name: meta.name || '',
    domain: meta.domain || '',
    title: meta.title || '',
    description: meta.description || '',
    pageMeta: meta[routeKeyname] || {},
  };

  return next();
};
