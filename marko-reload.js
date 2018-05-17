const {join} = require('path');
const {BUILD} = require('./resource').APP_CONSTANT;
const SOURCE_DIRECTORY = BUILD.MARKUP_SOURCE;
const nodeDir = require('node-dir');

function getAllMarkoFiles(callback) {
  nodeDir.readFiles(join(process.cwd(), SOURCE_DIRECTORY), {
    match: /.html$/,
    exclude: /^\./,
  }, function(err, content, next) {
    if (err) throw err;
    next();
  }, callback);
}

function markoReload() {
  getAllMarkoFiles((err, files) => {
    if (err) throw err;

    const watcher = require('chokidar').watch(files, {
      persistent: true,
    });

    require('marko/hot-reload').enable();

    watcher
      .on('change', (templatePath) => {
        console.log(`${templatePath} is updated.`);
        require('marko/hot-reload').handleFileModified(templatePath);
      });
  });
}

module.exports = markoReload;
