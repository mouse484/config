import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'tailwind',
  enable: ({ isPackageExists }) => isPackageExists('tailwindcss'),
  options: {
    entryPoint: 'src/global.css',
  },
  configs: [
    ({ options: { entryPoint } }) => ({
      jsPlugins: [
        'eslint-plugin-better-tailwindcss',
      ],
      rules: {
        ...eslintPluginBetterTailwindcss.configs.recommended.rules,
        'better-tailwindcss/no-unknown-classes': ['error', {
          detectComponentClasses: true,
        }],
      },
      settings: {
        'better-tailwindcss': {
          entryPoint,
        },
      },
    }),
  ],
})
