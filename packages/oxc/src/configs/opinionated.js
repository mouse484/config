import { defineConfig } from 'oxlint'

export default defineConfig({
  jsPlugins: ['eslint-plugin-antfu'],
  rules: {
    'antfu/top-level-function': ['error'],
    'antfu/consistent-chaining': ['error'],
    'antfu/import-dedupe': ['error'],
    'antfu/indent-unindent': ['error', { indent: 2 }],
    'antfu/no-ts-export-equal': ['error'],
  },
})
