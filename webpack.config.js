const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['./source/javascripts/site.js']
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/javascripts'
  },

  mode: "development",
  // mode: "production",
  // devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  }
};