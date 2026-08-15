import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'vitest',
  enable: false,
  configs: [
    {
      plugins: ['vitest'],
    },
  ],
})
