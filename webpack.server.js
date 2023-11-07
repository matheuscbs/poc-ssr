const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server/index.tsx",
  target: "node",
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
