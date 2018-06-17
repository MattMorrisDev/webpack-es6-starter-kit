const path = require('path');

module.exports = {
  appEntry: path.resolve(__dirname, '../', 'src/index.js'),
  indexHtmlTemplate: path.resolve(__dirname, '../', 'src/index.html'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  projectRoot: path.resolve(__dirname, '../')
};
