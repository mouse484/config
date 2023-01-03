/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['dist/'],
};
