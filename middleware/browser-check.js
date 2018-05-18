const {NAME_SPACE} = require('../resource/').APP_CONSTANT;
const useragent = require('useragent');
require('useragent/features');
const {supportedBrowser} = require('../resource/');
const browserSupportPage = '/browser-support/';

module.exports = (req, res, next) => {
  const userAgent = useragent.parse(req.headers['user-agent']);
  const supportedVersion = userAgent && supportedBrowser ? supportedBrowser[userAgent.family] : null;

  if (supportedVersion && !userAgent.satisfies(supportedVersion) && res[NAME_SPACE.RESPONSE_CONTEXT].uri.path !== browserSupportPage) {
    return res.redirect(browserSupportPage);
  }

  return next();
};
