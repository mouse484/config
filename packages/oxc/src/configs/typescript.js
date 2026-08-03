import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'typescript',
  configs: [
    {
      rules: {
        'typescript/explicit-function-return-type': ['off'],
        'typescript/explicit-module-boundary-types': ['off'],
      },
    },
  ],
})
