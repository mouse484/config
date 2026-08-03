import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'oxc',
  configs: [
    {
      rules: {
        'oxc/no-async-await': ['off'],
        'oxc/no-rest-spread-properties': ['off'],
      },
    },
  ],
})
