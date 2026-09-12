import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'eslint',
  enable: true,
  configs: [
    {
      plugins: ['eslint'],
      rules: {
        'id-length': 'off',
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
        'no-undefined': 'off',
        'no-ternary': 'off',
        'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'no-void': ['error', { allowAsStatement: true }],
        'one-var': 'off',
      },
    },
  ],
})
