const server = require("@storybook/core/server");
const options = require("./options").default;

server.buildDev(options);
