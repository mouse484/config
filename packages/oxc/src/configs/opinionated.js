import { fileURLToPath } from 'node:url'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'opinionated',
  enable: true,
  configs: [
    {
      jsPlugins: [{
        name: 'antfu',
        specifier: fileURLToPath(import.meta.resolve('eslint-plugin-antfu')),
      }],
      rules: {
        'antfu/top-level-function': 'error',
        'antfu/consistent-chaining': 'error',
        'antfu/import-dedupe': 'error',
        'antfu/indent-unindent': ['error', { indent: 2 }],
        'antfu/no-ts-export-equal': 'error',
      },
    },
  ],
})
