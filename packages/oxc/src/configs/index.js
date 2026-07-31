import eslint from './eslint.js'
import oxc from './oxc.js'
import perfectionist from './perfectionist.js'
import tanstackRouter from './tanstack-router.js'
import typescript from './typescript.js'

/**
 * @satisfies {Record<string, { enabled: boolean, config: import('oxlint').OxlintConfig }>}
 */
const customs = {
  tanstackRouter: { enabled: false, config: tanstackRouter },
  perfectionist: { enabled: true, config: perfectionist },
}

/** @typedef {Partial<Record<keyof typeof customs, boolean>>} CustomOptions */

/** @param {CustomOptions} [options] */
export default function configs(options = {}) {
  return [
    eslint,
    oxc,
    typescript,
    ...Object.entries(customs).flatMap(([key, { enabled, config }]) =>
      options[/** @type {keyof typeof customs} */ (key)] ?? enabled ? [config] : [],
    ),
  ]
}
