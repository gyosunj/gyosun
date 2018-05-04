const {exception} = require('../resource/');

function defaultHandler(err, req, res, next) {
  console.error(err.stack);
  return res.status(500).send(exception.five00.errorMessage);
}

function four04(req, res, next) {
  return res.status(404).send(exception.four04.errorMessage);
}

module.exports = {
  www: {
    defaultHandler,
    four04,
  },
};
