'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'each',
          'extend',
          'use',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
        ],
      },
    ],
    'block-closing-brace-empty-line-before': 'never',
    'max-empty-lines': 1,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'order/properties-alphabetical-order': true,
    'selector-max-id': 0,
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
  },
};
