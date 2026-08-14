import stylistic from '@stylistic/eslint-plugin'
import { createConfigs } from '../lib/factory.js'

const { rules } = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: true,
})

export default createConfigs ({
  name: 'stylistic',
  defaultEnabled: true,
  configs: [
    {
      jsPlugins: ['@stylistic/eslint-plugin'],
      rules,
    },
  ],
})
