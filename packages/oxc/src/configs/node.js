import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'node',
  enable: false,
  configs: [
    {
      plugins: ['node'],
    },
  ],
})
