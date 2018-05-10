const {exception, APP_CONSTANT} = require('../resource/');

function defaultHandler(err, req, res, next) {
  console.error(err.stack);

  if (res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router === APP_CONSTANT.ROUTERS.API) {
    return res.status(500).json({
      error: exception.five00.errorMessage,
    });
  }

  return res.status(500).send(exception.five00.errorMessage);
}

function four04(req, res, next) {
  if (res[APP_CONSTANT.NAME_SPACE.RESPONSE_CONFIG].router === APP_CONSTANT.ROUTERS.API) {
    return res.status(404).json({
      error: exception.four04.errorMessage,
    });
  }

  return res.status(404).send(exception.four04.errorMessage);
}

module.exports = {
  defaultHandler,
  four04,
};
