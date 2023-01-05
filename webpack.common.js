const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Paths = require("tsconfig-paths-webpack-plugin");

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
      {
        test: /\.(jpe?g|webp|png|svg|gif)/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new Paths()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
