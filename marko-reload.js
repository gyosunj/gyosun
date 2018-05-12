const {join} = require('path');
const SOURCE_DIRECTORY = '/src/';
const nodeDir = require('node-dir');

function getAllMarkoFiles(callback) {
  nodeDir.readFiles(join(process.cwd(), SOURCE_DIRECTORY), {
    match: /.marko$/,
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
      ignored: '!/**/*.marko',
      persistent: true,
    });

    require('marko/hot-reload').enable();

    watcher
      .on('change', (templatePath) => require('marko/hot-reload').handleFileModified(templatePath));
  });
}

module.exports = markoReload;
