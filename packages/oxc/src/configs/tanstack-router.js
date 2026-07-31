import { defineConfig } from 'oxlint'

export default defineConfig({
  overrides: [{
    files: ['src/routes/**/*.tsx'],
    rules: {
      'eslint/no-use-before-define': ['off'],
    },
  }],
})
