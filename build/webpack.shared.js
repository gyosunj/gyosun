const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');
const nodeDir = require('node-dir');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const currentWorkingDirectory = process.cwd();
const pathResolve = (path) => join(currentWorkingDirectory, path);

const {BUILD} = require(pathResolve('/resource/')).APP_CONSTANT;
const viewPageDirectory = pathResolve(BUILD.MARKUP_PAGE_SOURCE);
const viewPartialDirectory = pathResolve(BUILD.MARKUP_PARTIAL_SOURCE);

const viewPages = readdirSync(viewPageDirectory)
  .filter((pageDirectory) => lstatSync(join(viewPageDirectory, pageDirectory)).isDirectory());

const viewPartials = nodeDir.files(viewPartialDirectory, {sync: true}).filter((file) => file.indexOf('.html') !== -1);

const cleanWebpackPlugin = new CleanWebpackPlugin(BUILD.CLEANUP_TARGETS, {root: pathResolve('/')});

const htmlWebpackPluginsPages = viewPages.map((pageName) => {
  let options = {
    template: pathResolve(BUILD.MARKUP_PAGE_SOURCE) + pageName + '/index.html',
    filename: pathResolve(BUILD.MARKUP_PAGE_DIST) + pageName + '/index.marko',
    inject: true,
    showErrors: true,
    chunks: [pageName],
  };

  if (pageName.includes('_layout-')) {
    options.inject = 'head';
    options.inlineSource = '.js$';
  }

  return new HtmlWebpackPlugin(options);
});

const htmlWebpackPluginsPartials = viewPartials.map((fullFilePath) => {
  return new HtmlWebpackPlugin({
    template: fullFilePath,
    filename: fullFilePath.replace(/\/view\//i, '/dist/').replace(/\.html$/i, '.marko'),
    inject: false,
    showErrors: true,
    chunks: [],
    isForceToUseLodashLoader: true,
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
    loader: 'file-loader?name=[hash].[ext]',
  }],
};

const loaderCss = {
  test: /\.css$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }],
};

const loaderFont = {
  test: /\.(ttf|eot|woff|woff2)$/,
  use: {
    loader: 'file-loader?name=[hash].[ext]',
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
    filename: '[name].js',
    path: pathResolve(BUILD.BUNDLED_ASSET_DIST),
    publicPath: BUILD.PUBLIC_PATH,
  },
  plugins: [
    cleanWebpackPlugin,
    ...htmlWebpackPluginsPages,
    ...htmlWebpackPluginsPartials,
    new HtmlWebpackInlineSourcePlugin(),
  ],
  module: {
    rules: [
      loaderEslint,
      loaderJavascript,
      loaderImage,
      loaderFont,
      loaderCss,
      loaderHtml,
      loaderMarko,
    ],
  },
};
