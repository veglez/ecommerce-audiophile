const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ca]ss/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
