import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'tanstack',
  enable: true,
  configs: [
    ({ isPackageExists }) => isPackageExists('@tanstack/react-router')
      ? {
          ignorePatterns: ['**/src/routeTree.gen.ts'],
          overrides: [
            {
              files: ['src/routes/**/*.tsx'],
              rules: {
                'no-use-before-define': ['error', { functions: false }],
                'react/only-export-components': ['error', { customHOCs: ['createRootRoute', 'createFileRoute'] }],
              },
            },
          ],
        }
      : undefined,
  ],
})
