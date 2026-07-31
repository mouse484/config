import { defineConfig } from 'oxlint'

export default defineConfig({
  overrides: [{
    files: ['src/routes/**/*.tsx'],
    rules: {
      'typescript/explicit-function-return-type': ['off'],
    },
  }],
})
