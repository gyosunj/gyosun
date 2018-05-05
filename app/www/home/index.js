const path = require('path');

function indexHandler(req, res, next) {
  res.sendFile(path.join(process.cwd(), 'src/page/home/index.html'));
}

module.exports = {
  index: indexHandler,
};
