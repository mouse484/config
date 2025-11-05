import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'tailwind',
  baseWithOption: 'tailwind',
  configs: [
    (meta) => {
      if (meta?.entryPoint === undefined) return

      return {
        name: 'tailwind',
        plugins: {
          tailwind: eslintPluginBetterTailwindcss,
        },
        rules: {
          // Stylistic rules
          'tailwind/enforce-consistent-line-wrapping': ['warn', {
            group: 'newLine',
          }],
          'tailwind/enforce-consistent-class-order': ['warn', {
            order: 'improved',
          }],
          'tailwind/enforce-consistent-variable-syntax': 'warn',
          'tailwind/enforce-consistent-important-position': 'error',
          'tailwind/enforce-shorthand-classes': 'warn',
          'tailwind/no-duplicate-classes': 'error',
          'tailwind/no-deprecated-classes': 'error',
          'tailwind/no-unnecessary-whitespace': 'warn',
          // Correctness rules
          'tailwind/no-unregistered-classes': ['error', {
            ignore: [],
            detectComponentClasses: true,
          }],
          'tailwind/no-conflicting-classes': 'error',
          'tailwind/no-restricted-classes': 'off', // arbitrary valuesの制限を今後検討
        },
        settings: {
          'better-tailwindcss': {
            entryPoint: meta.entryPoint,
          },
        },
      }
    },
  ],
})
