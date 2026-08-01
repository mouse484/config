import { defineConfig } from 'oxlint'

export default defineConfig({
  rules: {
    'typescript/explicit-function-return-type': ['off'],
    'typescript/explicit-module-boundary-types': ['off'],
  },
})
