// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  plugins: [
    'html', // required to lint *.vue files
    'prettier' // eslint-plugin-prettier
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
