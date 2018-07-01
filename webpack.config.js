// use ES5 in this file, not ES6
// checkout this thread for possible solution:
// https://github.com/webpack/webpack/issues/1403

// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var config = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: "babel-loader"},
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "app/index.html"
  })],

  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
