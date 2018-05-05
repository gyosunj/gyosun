const {resolve} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sources = require('./src');

const ruleEslint = {
  test: /\.js$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  exclude: /node_modules/,
  options: {
    failOnWarning: false,
    failOnError: true,
    fix: false,
  },
};

const ruleJavascript = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['env', {
          'targets': {
            'browsers': ['ie >= 10'],
          },
        }],
      ],
    },
  },
};

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist', 'view']);

const htmlWebpackPlugins = Object.keys(sources).map((sourceName) => {
  return new HtmlWebpackPlugin({
    chunks: ['common', sourceName],
    template: resolve(__dirname, 'src' + sources[sourceName].html),
    filename: resolve(__dirname, 'view' + sources[sourceName].html),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  });
});

module.exports = {
  cache: true,
  context: __dirname,
  entry: Object.keys(sources).reduce((results, sourceName) => {
    results[sourceName] = './src' + sources[sourceName].js;
    return results;
  }, {}),
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name]-bundle.[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {rules: [ruleEslint, ruleJavascript]},
  plugins: [cleanWebpackPlugin, ...htmlWebpackPlugins],
};
