const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const config = require("./webpack.config.js");
const env = require("./env.js");

const name = "client bundle";
const target = "web";
const entry = {
  vendor: ["react", "react-dom", "react-router-dom"],
  client: ["./src/client.js"]
};
const browserSync = new BrowserSyncPlugin({
  host: env.HOST,
  port: env.BROWSER_SYNC_PORT,
  proxy: `http://${env.HOST}:${env.PORT}`,
  open: false
});

module.exports = (webpackEnv) => ({
  name,
  target,
  entry,
  ...config(webpackEnv),
  plugins: [browserSync]
});
