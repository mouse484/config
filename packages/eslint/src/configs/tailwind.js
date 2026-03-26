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
        extends: [
          eslintPluginBetterTailwindcss.configs.recommended,
        ],
        rules: {
          'better-tailwindcss/no-unknown-classes': ['error', {
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
