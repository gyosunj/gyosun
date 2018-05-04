const {NAME_SPACE} = require('../resource/').APP_CONSTANT;

module.exports = (req, res, next) => {
  res[NAME_SPACE.RESPONSE_CONTEXT].route = {
    protocol: req.protocol,
    isSecure: (req.protocol === 'https') ? true : false,
    hostname: req.hostname,
    pathname: req.originalUrl.split('?')[0],
    href: req.originalUrl,
    query: req.query,
    fullUrl: req.protocol + '://' + req.hostname + req.originalUrl,
  };

  return next();
};
