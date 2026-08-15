import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'unicorn',
  enable: true,
  configs: [
    {
      plugins: ['unicorn'],
    },
  ],
})
