import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'typeAware',
  defaultEnabled: true,
  configs: [
    {
      options: {
        typeAware: true,
        typeCheck: true,
      },
      rules: {
        'typescript/prefer-readonly-parameter-types': 'off',
      },
    },
  ],
})
