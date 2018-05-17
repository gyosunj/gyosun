const {NAME_SPACE} = require('../resource/').APP_CONSTANT;

module.exports = (req, res, next) => {
  res[NAME_SPACE.RESPONSE_CONTEXT].uri = {
    full: req.protocol + '://' + req.hostname + req.originalUrl,
    url: req.originalUrl,
    scheme: req.protocol,
    host: req.hostname,
    path: req.path.slice(-1) === '/' ? req.path : req.path + '/',
    href: req.originalUrl,
    query: req.query,
    isSecure: (req.protocol === 'https') ? true : false,
  };

  return next();
};
