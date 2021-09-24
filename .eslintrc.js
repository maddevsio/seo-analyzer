module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'airbnb-base/legacy',
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': ['import'],
  'rules': {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 0,
    'no-lonely-if': 0,
    'no-new': 0,
    'linebreak-style': 0,
    'no-bitwise': 0,
    'indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never', {
      'packages': 'never',
      'json': 'always'
    }],
    'no-floating-decimal': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': 0,
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': 'off',
    'no-extra-semi': 'error',
    'import/no-dynamic-require': 0,
    'new-cap': ['error', {
      'newIsCap': false,
      'properties': false
    }]
  }
};
