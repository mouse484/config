import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'vitest',
  defaultEnabled: false,
  configs: [
    {
      plugins: ['vitest'],
    },
  ],
})
