module.exports = {
  extends: [
    'airbnb-base'
  ],
  env: {
    mocha: true,
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    should: true,
    sinon: true,
  },
  rules: {
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
  },
};
