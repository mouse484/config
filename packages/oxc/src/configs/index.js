import eslint from './eslint.js'
import opinionated from './opinionated.js'
import oxc from './oxc.js'
import perfectionist from './perfectionist.js'
import stylistic from './stylistic.js'
import tailwind from './tailwind.js'
import tanstackRouter from './tanstack-router.js'
import typeAware from './type-aware.js'
import typescript from './typescript.js'

const CONFIGS = /** @type {const} */ [
  eslint,
  opinionated,
  oxc,
  perfectionist,
  stylistic,
  tailwind,
  tanstackRouter,
  typeAware,
  typescript,
]

/** @type {import(".").buildConfigs} */
export default function buildConfigs(options) {
  const configs = CONFIGS.flatMap(({ name, build }) => {
    const option = options[name]
    if (option === false || option === undefined) {
      return []
    }

    return typeof option === 'object'
    // @ts-expect-error - build configs with options
      ? build(option)
      : build()
  })

  return configs
}
