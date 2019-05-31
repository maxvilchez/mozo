module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'no-console': 'off',
      'react/no-unused-state': 'off',
      'max-len': 'off',
      'react/sort-comp': 'off',
      'react/destructuring-assignment': 'off',
      'no-underscore-dangle': 'off',
      'import/no-unresolved': 'off',
      'linebreak-style': 'off',
      'react/no-access-state-in-setstate': 'off',
      'object-curly-newline': 'off',
      'no-trailing-spaces': 'off'
    },
    'globals': {
      "fetch": false
    }
  }