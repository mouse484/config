import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  enable: false,
  name: 'tanstack',
  configs: [
    {
      ignorePatterns: ['**/src/routeTree.gen.ts'],
      overrides: [
        {
          files: ['src/routes/**/*.tsx'],
          rules: {
            'eslint/no-use-before-define': 'off',
            'react/only-export-components': ['error', { customHOCs: ['createRootRoute', 'createFileRoute'] }],
          },
        },
      ],
    },
  ],
})
