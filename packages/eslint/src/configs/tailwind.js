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
          ...eslintPluginBetterTailwindcss.configs.recommended.rules,
          ...eslintPluginBetterTailwindcss.configs.correctness.rules,
          ...eslintPluginBetterTailwindcss.configs.stylistic.rules,
          'tailwind/no-unknown-classes': ['error', {
            detectComponentClasses: true,
          }],
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
