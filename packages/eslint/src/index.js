import antfu, { GLOB_SRC } from '@antfu/eslint-config'

/**
 * @typedef {import('@antfu/eslint-config').OptionsConfig} OptionsConfig
 * @typedef {import('@antfu/eslint-config').TypedFlatConfigItem} TypedFlatConfigItem
 * @typedef {import('@antfu/eslint-config').Awaitable} Awaitable
 * @typedef {import('@antfu/eslint-config').TypedFlatConfigItem} TypedFlatConfigItem
 */

/**
 * Construct an array of ESLint flat config items.
 * ref: https://github.com/antfu/eslint-config/blob/main/src/factory.ts
 *
 * @param {OptionsConfig & TypedFlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<TypedFlatConfigItem[]>}
 *  The merged ESLint configurations.
 */
export function mouse(options, ...userConfigs) {
  /** @type {TypedFlatConfigItem[]} */
  const configs = []

  configs.push({
    name: 'mouse/source-files',
    files: [GLOB_SRC],
    rules: {
      'style/max-len': ['error', {
        code: 80,
        tabWidth: 2,
        comments: 120,
      }],
    },
  })

  return antfu(options, ...configs, ...userConfigs)
}
