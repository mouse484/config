import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'node',
  defaultEnabled: false,
  configs: [
    {
      plugins: ['node'],
    },
  ],
})
