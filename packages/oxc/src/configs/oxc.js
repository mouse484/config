import { defineConfig } from 'oxlint'

export default defineConfig({
  rules: {
    'oxc/no-async-await': ['off'],
    'oxc/no-rest-spread-properties': ['off'],
  },
})
