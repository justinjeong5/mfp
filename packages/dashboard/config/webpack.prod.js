const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
};

module.exports = merge(commonConfig, prodConfig);
