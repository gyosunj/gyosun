const template = require('../../../src/home/index.marko');

// function indexHandler(req, res, next) {
//   res.sendFile(path.join(process.cwd(), 'view/home/index.html'));
// }

function indexHandler(req, res, next) {
  res.marko(template, {
    name: 'Frank',
    count: 30,
    colors: ['red', 'green', 'blue'],
  });
};


module.exports = {
  index: indexHandler,
};
