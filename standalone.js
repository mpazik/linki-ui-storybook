const build = require('@storybook/core/standalone');
const frameworkOptions = require('./src/server/options').default;

async function buildStandalone(options) {
  return build(options, frameworkOptions);
}

module.exports = buildStandalone;
