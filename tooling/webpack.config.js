const path = require("path");

module.exports = (env = { development: false }) => ({
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  mode: env.development ? "development" : "production",
  stats: env.development ? "errors-only" : "normal",
  devtool: env.development ? "eval-source-map" : false
});
