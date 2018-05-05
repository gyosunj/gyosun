const {resolve} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: resolve(__dirname, 'src/home/index.html'),
  filename: resolve(__dirname, 'view/home/index.html'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
  },
});

module.exports = {
  cache: true,
  context: __dirname,
  entry: {
    home: './src/home/index.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name]-bundle.[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {rules: [ruleEslint, ruleJavascript]},
  plugins: [cleanWebpackPlugin, htmlWebpackPlugin],
};
