import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'promise',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['promise'],
    },
  ],
})
