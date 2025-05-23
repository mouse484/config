import fs from 'node:fs/promises'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const dts = await pluginsToRulesDTS({
  'readable-tailwind': eslintPluginReadableTailwind,
})

await fs.writeFile('./src/lib/rules.gen.d.ts', dts)
