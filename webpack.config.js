const commonConfig = require('./build-config/webpack.common');
const webpackMerge = require('webpack-merge');

// Addons are just plugins

const createAddonConfigs = (addonsList) => {
  // addonsList could be a single string, or an array of strings, so normalize
  // so that it's always an array of strings
  const addons = [].concat.apply([], [addonsList]).filter(Boolean);
  return addons.map((addon) => require(`./build-config/addons/webpack.${addon}.js`));
};

module.exports = (env) => {
  const envConfig = require(`./build-config/webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig, ...createAddonConfigs(env.addons));
};
