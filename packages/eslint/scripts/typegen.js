import { writeFile } from 'node:fs/promises'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const dts = await pluginsToRulesDTS({
  tailwind: eslintPluginBetterTailwindcss,
})

await writeFile('./src/lib/rules.gen.d.ts', dts)
