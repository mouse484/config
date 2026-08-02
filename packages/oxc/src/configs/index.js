import eslint from './eslint.js'
import oxc from './oxc.js'
import perfectionist from './perfectionist.js'
import stylistic from './stylistic.js'
import tanstackRouter from './tanstack-router.js'
import typeAware from './type-aware.js'
import typescript from './typescript.js'

/**
 * @satisfies {Record<string, [boolean, import('oxlint').OxlintConfig ]>}
 */
const _configs = {
  eslint: [true, eslint],
  oxc: [true, oxc],
  perfectionist: [true, perfectionist],
  stylistic: [true, stylistic],
  tanstackRouter: [false, tanstackRouter],
  typeAware: [true, typeAware],
  typescript: [true, typescript],
}

/** @typedef {Partial<Record<keyof typeof _configs, boolean>>} ConfigOptions */

/** @param {ConfigOptions} [options] */
export default function configs(options = {}) {
  return Object.entries(_configs).flatMap(([name, [defaultEnabled, config]]) => {
    return (Object.hasOwn(options, name) ? options[/** @type {keyof ConfigOptions} */ (name)] : defaultEnabled) ? [config] : []
  })
}
