import { defineConfig } from 'oxlint'

export default defineConfig({
  rules: {
    'eslint/id-length': ['off'],
    'eslint/func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'eslint/no-magic-numbers': ['error', { ignore: [0, 1, -1] }],
    'eslint/no-undefined': ['off'],
    'eslint/no-ternary': ['off'],
    'eslint/no-nested-ternary': ['error'],
    'eslint/no-unneeded-ternary': ['error'],
    /**
     * Prefer `perfectionist` plugin for sorting
     */
    'eslint/sort-imports': ['off'],
    'eslint/sort-keys': ['off'],
  },
})
