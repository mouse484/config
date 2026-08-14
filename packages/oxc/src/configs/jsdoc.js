import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'jsdoc',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['jsdoc'],
    },
  ],
})
