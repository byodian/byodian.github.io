const path    = require('path');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './src/assets/js/index.js'
  ],
  output: {
    filename: 'js/script.js',
    path: path.resolve(__dirname, '_site')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};