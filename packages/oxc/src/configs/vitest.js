import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'vitest',
  configs: [
    {
      plugins: ['vitest'],
    },
  ],
})
