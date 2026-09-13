import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'javascript',
  enable: true,
  configs: [
    {
      plugins: ['jsdoc', 'promise'],
      rules: {
        'promise/prefer-await-to-callbacks': 'off',
      },
    },
  ],
})
