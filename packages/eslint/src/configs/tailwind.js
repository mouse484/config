import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'tailwind',
  baseWithOption: 'tailwind',
  configs: [
    (meta) => {
      return {
        name: 'tailwind',
        plugins: {
          tailwind: eslintPluginBetterTailwindcss,
        },
        rules: {
          // stylistic
          'tailwind/multiline': ['warn', {
            group: 'newLine',
          }],
          'tailwind/no-unnecessary-whitespace': 'warn',
          'tailwind/sort-classes': 'warn',
          'tailwind/no-duplicate-classes': 'error',
          'tailwind/enforce-consistent-variable-syntax': 'error',
          // correctness
          'tailwind/no-unregistered-classes': 'off', // FIXME
          'tailwind/no-conflicting-classes': 'error',
          'tailwind/no-restricted-classes': 'off',
        },
        settings: {
          tailwind: {
            entryPoint: meta?.entryPoint,
          },
        },
      }
    },
  ],
})
