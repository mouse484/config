import eslint from './eslint'
import opinionated from './opinionated'
import oxc from './oxc'
import perfectionist from './perfectionist'
import stylistic from './stylistic'
import tailwind from './tailwind'
import tanstackRouter from './tanstack-router'
import typeAware from './type-aware'
import typescript from './typescript'

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
