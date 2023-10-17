const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
};

module.exports = merge(commonConfig, devConfig);
