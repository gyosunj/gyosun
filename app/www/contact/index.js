const path = require('path');

function indexHandler(req, res, next) {
  res.sendFile(path.join(process.cwd(), 'view/contact/index.html'));
}

module.exports = {
  index: indexHandler,
};
