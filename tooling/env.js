const envalid = require("envalid");

const env = envalid.cleanEnv(process.env, {
  HOST: envalid.host({
    default: "localhost",
    desc: "The host the application is running on.",
    docs: "https://github.com/nnnnat/simple-client-side/docs/environment.md#HOST"
  }),
  PORT: envalid.port({
    default: 4444,
    desc: "The port the application is running at.",
    docs: "https://github.com/nnnnat/simple-client-side/docs/environment.md#PORT"
  }),
  BROWSER_SYNC_PORT: envalid.port({
    default: 4000,
    desc: "The port the Browsersync proxy is running at.",
    docs: "https://github.com/nnnnat/simple-client-side/docs/environment.md#BROWSER_SYNC_PORT"
  })
});

module.exports = env;
