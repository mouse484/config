import { defineConfig } from 'oxlint'

export default defineConfig({
  rules: {
    'eslint/id-length': ['off'],
    'eslint/func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    /**
     * Prefer `perfectionist` plugin for sorting
     */
    'eslint/sort-imports': ['off'],
    'eslint/sort-keys': ['off'],
  },
})
