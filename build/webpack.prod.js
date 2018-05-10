const webpackMerge = require('webpack-merge');
const webpackShared = require('./webpack.shared.js');

module.exports = webpackMerge(webpackShared, {
  mode: 'production',
  devtool: false,
  output: {
    filename: '[name]-bundle.[chunkhash].js',
  },
});
