const {APP_CONSTANT, meta} = require('../resource/');

module.exports = (req, res, next) => {
  const routeKeyname = res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].route && res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].route.routeKeyName || '';

  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].meta = {
    global: meta.global,
    pageMeta: meta[routeKeyname] || {},
  };

  return next();
};
