import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  defaultEnabled: false,
  name: 'tanstackRouter',
  configs: [
    {
      overrides: [{
        files: ['src/routes/**/*.tsx'],
        rules: {
          'eslint/no-use-before-define': ['off'],
        },
        excludeFiles: [
          'src/routeTree.gen.ts',
        ],
      }],
    },
  ],
})
