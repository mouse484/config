import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'oxlint'

const { rules } = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: true,
})

export default defineConfig({
  jsPlugins: ['@stylistic/eslint-plugin'],
  rules,
})
