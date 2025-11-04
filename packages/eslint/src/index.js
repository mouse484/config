import antfu from '@antfu/eslint-config'
import astro from './configs/astro.js'
import base from './configs/base.js'
import perfectionist from './configs/perfectionist.js'
import stylistic from './configs/stylistic.js'
import svelte from './configs/svelte.js'
import tailwind from './configs/tailwind.js'
import typescript from './configs/typescript.js'
import unicorn from './configs/unicorn.js'

/** @type {import('.').mouse} */
async function mouse(options, ...userConfigs) {
  options = {
    unicorn: {
      allRecommended: true,
    },
    stylistic: true,
    ...options,
  }

  const configs = [
    ...base(options),
    // Code style
    ...stylistic(options),
    ...unicorn(options),
    ...perfectionist(options),
    // Language specific
    ...typescript(options),
    ...astro(options),
    ...svelte(options),
    // Tools
    ...tailwind(options),
  ]

  const normalizedOptions = {
    ...options,
    ignores: typeof options?.ignores === 'function' ? options.ignores([]) : options?.ignores,
  }

  return antfu(normalizedOptions, ...configs, ...userConfigs)
}

export default mouse
export { mouse }
export * from './const/glob.js'
export * from '@antfu/eslint-config'
