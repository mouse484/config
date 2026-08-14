import defu from 'defu'
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
@type {import(".").buildConfigs}
 */
export default function buildConfigs(options) {
  const configs = CONFIGS.flatMap(({ name, build, defaultEnabled, options: defaultOptions }) => {
    const option = options[name]
    if (option === false || (option === undefined && !defaultEnabled)) {
      return []
    }
    // @ts-expect-error - build configs with options
    // eslint-disable-next-line unicorn/prefer-minimal-ternary
    return typeof option === 'object' ? build(defu(option, defaultOptions)) : build(defaultOptions)
  })

  const plugins = [...new Set(configs.flatMap(config => config.plugins ?? []))]
  if (plugins.length === 0) {
    return configs
  }
  return configs.map((config, index) => {
    if (index === 0) {
      return { ...config, plugins }
    }
    const rest = { ...config }
    delete rest.plugins
    return rest
  })
}
