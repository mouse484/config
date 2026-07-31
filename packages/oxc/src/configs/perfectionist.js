import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'oxlint'

export default defineConfig({
  jsPlugins: ['eslint-plugin-perfectionist'],
  rules: {
    ...perfectionist.configs['recommended-natural'].rules,
  },
})
