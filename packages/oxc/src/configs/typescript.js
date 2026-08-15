import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'typescript',
  enable: true,
  options: {
    typeAware: true,
  },
  configs: ({ typeAware }) => [
    {
      plugins: ['typescript'],
      rules: {
        'typescript/explicit-function-return-type': 'off',
        'typescript/explicit-module-boundary-types': 'off',
        'eslint/no-undef': 'off',
      },
    },
    typeAware
      ? {
          options: {
            typeAware: true,
            typeCheck: true,
          },
          rules: {
            'typescript/prefer-readonly-parameter-types': 'off',
          },
        }
      : undefined,
  ],
})
