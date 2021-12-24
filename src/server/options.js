const packageJson = require('../../package.json');

exports.default = {
    packageJson: packageJson,
    framework: 'linki-ui',
    frameworkPath: "linki-ui-storybook",
    frameworkPresets: [require.resolve('./framework-preset.js')],
};
