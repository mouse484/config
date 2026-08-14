import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'unicorn',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['unicorn'],
    },
  ],
})
