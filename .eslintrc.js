/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: ['plugin:@docusaurus/recommended'],
  plugins: ['@docusaurus', 'eslint-plugin-frontmatter'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@babel/eslint-parser',
};
