module.exports = {
  extends: [
    './base',
    './jest',
    './react',
    './typescript',
    './stylelint',
  ].map(require.resolve),
  rules: {},
};
