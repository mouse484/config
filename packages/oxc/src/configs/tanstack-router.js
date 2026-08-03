import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  defaultEnabled: false,
  name: 'tanstackRouter',
  configs: [
    {
      ignorePatterns: ['**/src/routeTree.gen.ts'],
      overrides: [
        {
          files: ['src/routes/**/*.tsx'],
          rules: {
            'eslint/no-use-before-define': 'off',
          },
        },
      ],
    },
  ],
})
