import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'javascript',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['jsdoc', 'promise'],
    },
  ],
})
