const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const currentWorkingDirectory = process.cwd();
const pathResolve = (path) => join(currentWorkingDirectory, path);
const viewPageDirectory = pathResolve('/src/page/');
const viewPages = readdirSync(viewPageDirectory)
  .filter((pageDirectory) => lstatSync(join(viewPageDirectory, pageDirectory)).isDirectory());

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist', 'view'], {root: pathResolve('/')});
const htmlWebpackPlugins = viewPages.map((pageName) => {
  return new HtmlWebpackPlugin({
    template: pathResolve('/src/page/') + pageName + '/index.html',
    filename: pathResolve('/view/') + pageName + '/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
    chunksSortMode: 'dependency',
  });
});

const loaderEslint = {
  test: /\.js$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  exclude: /node_modules/,
  options: {
    failOnWarning: false,
    failOnError: true,
    fix: false,
    formatter: require('eslint-friendly-formatter'),
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
          targets: {
            browsers: ['last 2 versions', 'ie >= 10'],
          },
          modules: false,
          useBuiltIns: true,
          debug: false,
        }],
      ],
    },
  },
};

const loaderImage = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [{
    loader: 'file-loader',
  }],
};

const loaderCss = {
  test: /\.css$/,
  use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
};

const loaderFont = {
  test: /\.(ttf|eot|woff|woff2)$/,
  use: {
    loader: 'file-loader',
  },
};


module.exports = {
  cache: true,
  context: pathResolve('/'),
  entry: viewPages.reduce((results, pageName) => {
    results[pageName] = pathResolve('/src/page/') + pageName + '/index.js';
    return results;
  }, {}),
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: pathResolve('/dist/'),
    publicPath: '/',
  },
  module: {
    rules: [loaderEslint, loaderJavascript, loaderImage, loaderCss, loaderFont],
  },
  plugins: [cleanWebpackPlugin, ...htmlWebpackPlugins],
};
