// @ts-check
import antfu, {
  GLOB_SRC,
  GLOB_TS,
  GLOB_TSX,
  interopDefault,
  renameRules,
  resolveSubOptions,
} from '@antfu/eslint-config'

/**
 * @typedef {import('@antfu/eslint-config').OptionsConfig} OptionsConfig
 * @typedef {import('@antfu/eslint-config').TypedFlatConfigItem} TypedFlatConfigItem
 */

/**
 * Construct an array of ESLint flat config items.
 * ref: https://github.com/antfu/eslint-config/blob/main/src/factory.ts
 *
 * @param {OptionsConfig & TypedFlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {import('@antfu/eslint-config').Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<TypedFlatConfigItem[]>}
 *  The merged ESLint configurations.
 */
export async function mouse(options, ...userConfigs) {
  options = {
    lessOpinionated: true,
    ...options,
  }

  /** @type {TypedFlatConfigItem[]} */
  const configs = []

  configs.push({
    name: 'mouse/source-files',
    files: [GLOB_SRC],
    rules: {
      'style/max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          comments: 120,
        },
      ],
    },
  })

  if (options?.typescript) {
    const pluginTs = await interopDefault(
      import('@typescript-eslint/eslint-plugin'),
    )

    /**
     * @param {string} key
     * @returns {import("eslint").Linter.RulesRecord}
     * if tsconfigPath is defined, append '-type-checked' to the key
     */
    const getRules = (key) => {
      const typescriptOptions = resolveSubOptions(options, 'typescript')
      const tsconfigPath
        = 'tsconfigPath' in typescriptOptions
          ? typescriptOptions.tsconfigPath
          : undefined

      return renameRules(
        pluginTs.configs[tsconfigPath ? `${key}-type-checked` : key]?.rules
        ?? {},
        { '@typescript-eslint': 'ts' },
      )
    }

    configs.push({
      name: 'mouse/typescript',
      files: [GLOB_TS, GLOB_TSX],
      rules: {
        ...getRules('strict'),
        ...getRules('stylistic'),
      },
    })
  }

  if (options?.stylistic) {
    configs.push({
      name: 'mouse/stylistic',
      rules: {
        'style/brace-style': [
          'error',
          '1tbs',
        ],
      },
    })
  }

  return antfu(options, ...configs, ...userConfigs)
}