import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'react',
  enable: ({ isPackageExists }) => isPackageExists('react'),
  configs: [
    {
      plugins: ['react'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-max-depth': ['error', { max: 5 }],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      },
    },
    {
      plugins: ['jsx-a11y'],
    },
  ],
})
