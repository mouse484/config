import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'unicorn',
  configs: [
    {
      plugins: ['unicorn'],
    },
  ],
})
