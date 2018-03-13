const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");

const library_name = 'coolmodal';

module.exports = {
  entry: path.resolve(__dirname, 'src', `${library_name}.js`),
  output: {
    filename: `${library_name}.min.js`,
    path: path.resolve(__dirname, 'dist'),
    library: library_name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)?$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js']
  },
  plugins: [
    new BabiliPlugin()
  ]
}
