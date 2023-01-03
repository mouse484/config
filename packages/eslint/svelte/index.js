/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: '@mouse_484/eslint-config-typescript',
  plugins: ['svelte3'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
};
