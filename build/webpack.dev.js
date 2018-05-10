const webpackMerge = require('webpack-merge');
const webpackShared = require('./webpack.shared.js');

module.exports = webpackMerge(webpackShared, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
});
