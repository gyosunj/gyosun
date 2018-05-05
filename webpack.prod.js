const webpackMerge = require('webpack-merge');
const webpackShared = require('./webpack.shared.js');

const ruleCss = {
  test: /\.css$/,
  use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
};

module.exports = webpackMerge(webpackShared, {
  mode: 'production',
  module: {rules: [ruleCss]},
});
