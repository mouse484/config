import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'oxc',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['oxc'],
      rules: {
        'oxc/no-async-await': 'off',
        'oxc/no-rest-spread-properties': 'off',
      },
    },
  ],
})
