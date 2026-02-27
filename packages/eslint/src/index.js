import antfu, { GLOB_JS, GLOB_JSX } from '@antfu/eslint-config'
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

  const composer = antfu(normalizedOptions, ...configs, ...userConfigs)

  /**
   * Override TypeScript configs for JS/JSX files if `allowJS` is enabled.
   */
  if (
    typeof options.typescript === 'object'
    && 'allowJS' in options.typescript
    && options.typescript.allowJS
  ) {
    /** @type {import("eslint").Linter.Config} */
    const overrideTypeScriptAllowJS = { files: [GLOB_JS, GLOB_JSX] }

    await composer.override('antfu/typescript/parser', overrideTypeScriptAllowJS)
    await composer.override('antfu/typescript/rules', overrideTypeScriptAllowJS)

    if (options.typescript.tsconfigPath !== undefined) {
      await composer.override('antfu/typescript/type-aware-parser', overrideTypeScriptAllowJS)
      await composer.override('antfu/typescript/rules-type-aware', overrideTypeScriptAllowJS)
    }
  }

  return composer
}

export default mouse
export { mouse }
export * from './const/glob.js'
export * from '@antfu/eslint-config'
