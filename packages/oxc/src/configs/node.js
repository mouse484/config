import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'node',
  enable: ({ isPackageExists }) => isPackageExists('@types/node'),
  configs: [
    {
      plugins: ['node'],
    },
  ],
})
