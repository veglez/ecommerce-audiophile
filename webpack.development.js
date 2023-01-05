const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

/** @type {import("webpack").Configuration} */
const devConfig = {
  devServer: {
    port: 3005,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  mode: "development",
};

module.exports = merge(webpackCommon, devConfig);
