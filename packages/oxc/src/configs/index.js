import { isPackageExists } from 'local-pkg'
import eslint from './eslint.js'
import javascript from './javascript.js'
import node from './node.js'
import opinionated from './opinionated.js'
import oxc from './oxc.js'
import perfectionist from './perfectionist.js'
import react from './react.js'
import stylistic from './stylistic.js'
import tailwind from './tailwind.js'
import tanstackRouter from './tanstack-router.js'
import typeAware from './type-aware.js'
import typescript from './typescript.js'
import unicorn from './unicorn.js'
import vitest from './vitest.js'

const CONFIGS = /** @type {const} */[
  eslint,
  opinionated,
  oxc,
  perfectionist,
  stylistic,
  tailwind,
  tanstackRouter,
  typeAware,
  typescript,
  react,
  vitest,
  node,
  javascript,
  unicorn,
]

/**
@param {import(".").Options} options
@returns {import("oxlint").OxlintConfig[]} Generated configs for the enabled options
 */
export default function buildConfigs(options) {
  const context = { isPackageExists, options }
  return CONFIGS.flatMap(({ name, build, enable = true }) => {
    const option = options[name]
    if (option === false) {
      return []
    }
    if (option === undefined) {
      const isEnabled = typeof enable === 'function' ? enable(context) : enable
      if (!isEnabled) {
        return []
      }
    }
    // @ts-expect-error - build configs with options
    return build(context, typeof option === 'object' ? option : undefined)
  })
}
