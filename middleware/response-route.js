const {NAME_SPACE} = require('../resource/').APP_CONSTANT;

module.exports = (route) => {
  return (req, res, next) => {
    res[NAME_SPACE.RESPONSE_CONTEXT].route = route;

    return next();
  };
};
