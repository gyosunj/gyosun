const {resolve} = require('path');

const ruleEslint = {
  test: /\.js$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  options: {
    emitWarning: true,
  },
};
const ruleJavascript = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {loader: 'babel-loader'},
};
const ruleCss = {
  test: /\.css$/,
  use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
};
const pluginEslint = new webpack.LoaderOptionsPlugin({
  options: {
    eslint: {
      failOnWarning: false,
      failOnError: true,
      fix: false,
    },
  },
});
const pluginSourceMap = new webpack.SourceMapDevToolPlugin({
  filename: '[file].map',
});

module.exports = {
  entry: './src/home/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {rules: [ruleEslint, ruleJavascript, ruleCss]},
  plugins: [pluginEslint, pluginSourceMap],
};

// module.exports = function(env) {
//   return {
//     entry: {
//       home: resolve(__dirname, './src/home/index.js'),
//       contact: resolve(__dirname, './src/contact/index.js'),
//     },
//     output: {
//       filename: '[name]/bundle.js',
//       path: resolve(__dirname, 'dist'),
//     },
//     resolve: {
//       extensions: ['.js'],
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           enforce: 'pre',
//           loader: 'eslint-loader',
//           options: {
//             emitWarning: true,
//           },
//         },
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           loader: 'babel-loader',
//           options: {
//             presets: ['env'],
//             plugins: ['syntax-dynamic-import'],
//           },
//         },
//       ],
//     },
//     plugins: [
//       new webpack.LoaderOptionsPlugin({
//         options: {
//           eslint: {
//             failOnWarning: false,
//             failOnError: true,
//             fix: false,
//           },
//         },
//       }),
//       new webpack.optimize.MinChunkSizePlugin({
//         minChunkSize: 512000
//       }),
//       new webpack.SourceMapDevToolPlugin({
//         filename: '[file].map',
//       }),
//     ]
//   }
// };
