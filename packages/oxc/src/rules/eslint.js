import { defineConfig } from 'oxlint'

export default defineConfig({
  rules: {
    'eslint/id-length': ['off'],
    'eslint/func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
})
