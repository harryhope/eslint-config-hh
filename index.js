module.exports = {
  extends: 'standard',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false
    }]
  }
]
