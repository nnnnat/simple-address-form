const nodeExternals = require("webpack-node-externals");
const config = require("./webpack.config.js");

const name = "server bundle";
const target = "node";
const entry = ["express", "./src/server.js"];

module.exports = (webpackEnv) => ({
  name,
  target,
  entry,
  externals: [nodeExternals()],
  ...config(webpackEnv)
});
