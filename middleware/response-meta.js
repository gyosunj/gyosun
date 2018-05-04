const {APP_CONSTANT, meta} = require('../resource/');

module.exports = (req, res, next) => {
  res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONTEXT].meta = {
    name: meta.name || '',
    domain: meta.domain || '',
    title: meta.title || '',
    description: meta.description || '',
  };

  return next();
};
