module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', {code: 125}],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'react/jsx-props-no-spreading': 'off',
    'max-lines': ['error', {max: 100, skipBlankLines: true, skipComments: true}],
    'linebreak-style': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    indent: 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-console': 'off',
  },
}
