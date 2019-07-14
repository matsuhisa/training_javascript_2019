const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './source/javascripts/site.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/javascripts'
  }
};