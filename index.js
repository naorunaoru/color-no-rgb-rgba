const {createPlugin} = require('stylelint');

const rules = require('./rules');

module.exports = [
  createPlugin('color-no-rgb-rgba/forbid', rules['color-no-rgb-rgba']),
];
