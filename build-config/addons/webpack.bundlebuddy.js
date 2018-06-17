const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin');

const config = {
  devtool: 'source-map',
  plugins: [new BundleBuddyWebpackPlugin()]
};

module.exports = config;
