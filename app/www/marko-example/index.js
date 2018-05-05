function indexHandler(req, res) {
  require('../../../src/page/marko-example/index.marko').render({
    pageName: 'Marko Example',
  }, res);
};

module.exports = {
  index: indexHandler,
};
