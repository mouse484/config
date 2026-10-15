import { fileURLToPath } from 'node:url'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'import',
  enable: true,
  configs: [
    {
      jsPlugins: [{
        name: 'perfectionist',
        specifier: fileURLToPath(import.meta.resolve('eslint-plugin-perfectionist')),
      }],
      rules: {
        // `sort-imports` is handled by oxfmt (`sortImports`)
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
      },
    },
    {
      rules: {
        'eslint/sort-imports': 'off',
        'eslint/sort-keys': 'off',
      },
    },
  ],
})
