import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'vitest',
  enable: ({ isPackageExists }) => isPackageExists('vitest'),
  configs: [
    {
      plugins: ['vitest'],
      rules: {
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
      },
    },
  ],
})
