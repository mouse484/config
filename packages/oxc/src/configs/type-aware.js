import { defineConfig } from 'oxlint'

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    'typescript/prefer-readonly-parameter-types': ['off'],
  },
})
