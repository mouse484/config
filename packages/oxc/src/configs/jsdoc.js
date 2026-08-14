import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'jsdoc',
  configs: [
    {
      plugins: ['jsdoc'],
    },
  ],
})
