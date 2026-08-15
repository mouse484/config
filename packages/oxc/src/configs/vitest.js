import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'vitest',
  enable: ({ isPackageExists }) => isPackageExists('vitest'),
  configs: [
    {
      plugins: ['vitest'],
    },
  ],
})
