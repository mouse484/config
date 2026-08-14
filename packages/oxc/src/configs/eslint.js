import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'eslint',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['eslint'],
      rules: {
        'eslint/id-length': 'off',
        'eslint/func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'eslint/no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
        'eslint/no-undefined': 'off',
        'eslint/no-ternary': 'off',
        'eslint/no-nested-ternary': 'error',
        'eslint/no-unneeded-ternary': 'error',
        'eslint/no-void': ['error', { allowAsStatement: true }],
        /**
         * Prefer `perfectionist` plugin for sorting
         */
        'eslint/sort-imports': 'off',
        'eslint/sort-keys': 'off',
      },
    },
  ],
})
