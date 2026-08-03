import perfectionist from 'eslint-plugin-perfectionist'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'perfectionist',
  configs: [
    {
      jsPlugins: ['eslint-plugin-perfectionist'],
      rules: {
        ...perfectionist.configs['recommended-natural'].rules,
      },
    },
  ],
})
