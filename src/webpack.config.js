const HTMLWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      inject: true
    }),
    new miniCSSExtractPlugin({
      filename: "bundle.css",
      
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCSSExtractPlugin.loader, "style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  }
}