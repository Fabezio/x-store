module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2020: true,
    es6: true,
    mongo: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: false,
    singlequotes: true
  }
};