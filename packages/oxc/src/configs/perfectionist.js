import perfectionist from 'eslint-plugin-perfectionist'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'perfectionist',
  defaultEnabled: true,
  configs: [
    {
      jsPlugins: ['eslint-plugin-perfectionist'],
      rules: {
        ...perfectionist.configs['recommended-natural'].rules,
      },
    },
    {
      rules: {
        'eslint/sort-imports': 'off',
        'eslint/sort-keys': 'off',
      },
    },
  ],
})
