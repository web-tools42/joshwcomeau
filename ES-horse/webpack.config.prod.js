var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // 'babel-polyfill',
    './src/modern.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'static'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    loaders: [
      // JAVASCRIPT
      {
        test:     /\.js$/,
        loader:   'babel',
        exclude:  /node_modules/,
        include:  /src/
      },
      // SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
      }

    ]
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules']
  },

  devServer: {
    port: 8765
  }
}
