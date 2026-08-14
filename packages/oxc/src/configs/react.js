import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'react',
  defaultEnabled: true,
  configs: [
    {
      plugins: ['react', 'jsx-a11y', 'react-perf'],
    },
  ],
})
