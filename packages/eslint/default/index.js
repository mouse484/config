/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: [
    '@mouse_484/eslint-config-base',
    '@mouse_484/eslint-config-typescript',
    '@mouse_484/eslint-config-import',
    'plugin:import/typescript',
    '@mouse_484/eslint-config-prettier',
  ],
  settings: { 'import/resolver': { typescript: true, node: true } },
  env: {
    browser: true,
    node: true,
  },
};
