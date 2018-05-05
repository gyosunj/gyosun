const {join, resolve} = require('path');
const {lstatSync, readdirSync} = require('fs');
const PAGE_SOURCES = '/src/page/';
const viewPageDirectory = join(process.cwd(), PAGE_SOURCES);
const viewPages = readdirSync(viewPageDirectory)
  .filter((pageDirectory) => lstatSync(join(viewPageDirectory, pageDirectory)).isDirectory());
const CleanWebpackPlugin = require('clean-webpack-plugin');

const loaderEslint = {
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

const loaderJavascript = {
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

const loaderImage = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [{
    loader: 'file-loader',
    options: {
      mimetype: 'application/x-font-ttf',
    },
  }],
};

const loaderMarko = {
  test: /\.marko$/,
  loader: 'marko-loader',
};

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

module.exports = {
  cache: true,
  context: __dirname,
  entry: viewPages.reduce((results, absoluteDirPath) => {
    results[absoluteDirPath] = './src/page/' + absoluteDirPath + '/index.js';
    return results;
  }, {}),
  resolve: {
    extensions: ['.js', '.marko'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  module: {
    rules: [loaderEslint, loaderJavascript, loaderImage, loaderMarko],
  },
  plugins: [cleanWebpackPlugin],
};

// new webpack.NoEmitOnErrorsPlugin(),
