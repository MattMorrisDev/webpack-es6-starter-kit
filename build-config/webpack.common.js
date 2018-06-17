const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
  target: 'web',
  entry: commonPaths.appEntry,
  output: {
    filename: 'index.[chunkhash].js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      /*{
        test: /\.js$/,
        use: 'babel-loader'
      },*/
      {
        test: [/\.png/, /\.jpe?g$/],
        use: [
          {
            // Pictures smaller than the limit are inlined as base64 data
            loader: 'url-loader',
            options: {limit: 10000}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Page title goes here',
      template: commonPaths.indexHtmlTemplate
    })
  ],
  stats: {
    env: true
  }
};
module.exports = config;