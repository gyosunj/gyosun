const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const currentWorkingDirectory = process.cwd();
const pathResolve = (path) => join(currentWorkingDirectory, path);

const {BUILD} = require(pathResolve('/resource/')).APP_CONSTANT;
const viewPageDirectory = pathResolve(BUILD.MARKUP_PAGE_SOURCE);
const viewSharedDirectory = pathResolve(BUILD.MARKUP_SHARED_SOURCE);

const viewPages = readdirSync(viewPageDirectory)
  .filter((pageDirectory) => lstatSync(join(viewPageDirectory, pageDirectory)).isDirectory());

const viewShared = readdirSync(viewSharedDirectory)
  .filter((pageDirectory) => lstatSync(join(viewSharedDirectory, pageDirectory)).isDirectory());

const cleanWebpackPlugin = new CleanWebpackPlugin(BUILD.CLEANUP_TARGETS, {root: pathResolve('/')});

const htmlWebpackPluginsPages = viewPages.map((pageName) => {
  return new HtmlWebpackPlugin({
    template: pathResolve(BUILD.MARKUP_PAGE_SOURCE) + pageName + '/index.html',
    filename: pathResolve(BUILD.MARKUP_PAGE_DIST) + pageName + '/index.marko',
    inject: true,
    // minify: {
    //   removeComments: true,
    //   collapseWhitespace: true,
    // },
    showErrors: true,
    chunks: [pageName],
  });
});

const htmlWebpackPluginsShared = viewShared.map((pageName) => {
  return new HtmlWebpackPlugin({
    template: pathResolve(BUILD.MARKUP_SHARED_SOURCE) + pageName + '/index.html',
    filename: pathResolve(BUILD.MARKUP_SHARED_DIST) + pageName + '/index.marko',
    inject: false,
    // minify: {
    //   removeComments: true,
    //   collapseWhitespace: true,
    // },
    showErrors: true,
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
    loader: 'file-loader?name=[name]-[hash:6].[ext]',
  }],
};

const loaderCss = {
  test: /\.css$/,
  use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
};

const loaderFont = {
  test: /\.(ttf|eot|woff|woff2)$/,
  use: {
    loader: 'file-loader?name=[name]-[hash:6].[ext]',
  },
};

const loaderMarko = {
  test: /\.marko$/,
  loader: 'marko-loader',
};

const loaderHtml = {
  test: /\.html$/,
  use: {
    loader: 'html-loader',
    options: {
      publicPath: BUILD.PUBLIC_PATH,
    },
  },
};

module.exports = {
  cache: true,
  context: __dirname,
  entry: viewPages.reduce((results, pageName) => {
    results[pageName] = pathResolve(BUILD.MARKUP_PAGE_SOURCE) + pageName + '/index.js';
    return results;
  }, {}),
  resolve: {
    extensions: ['.js', '.marko'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: pathResolve(BUILD.BUNDLED_ASSET_DIST),
    publicPath: BUILD.PUBLIC_PATH,
  },
  module: {
    rules: [loaderEslint, loaderJavascript, loaderImage, loaderFont, loaderCss, loaderMarko, loaderHtml],
  },
  plugins: [cleanWebpackPlugin, ...htmlWebpackPluginsPages, ...htmlWebpackPluginsShared],
};
