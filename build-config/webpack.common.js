const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: [/\.png/, /\.jpe?g$/, /\.gif/],
        use: [
          {
            // Pictures smaller than the limit are inlined as base64 data
            loader: 'url-loader',
            options: {limit: 10000}
          }
        ]
      },
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.outputPath], {root: commonPaths.projectRoot}),
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
