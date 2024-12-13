// @ts-check
import antfu, {
  GLOB_ASTRO,
  GLOB_SRC,
  GLOB_TS,
  GLOB_TSX,
  interopDefault,
  renameRules,
  resolveSubOptions,
} from '@antfu/eslint-config'

/** @type {import('@antfu/eslint-config')["antfu"]} */
export async function mouse(options, ...userConfigs) {
  options = {
    lessOpinionated: true,
    ...options,
  }

  /** @type {import('@antfu/eslint-config').TypedFlatConfigItem[]} */
  const configs = []

  configs.push({
    name: 'mouse/source-files',
    files: [GLOB_SRC],
    rules: {
      'style/max-len': [
        'error',
        {
          code: 100,
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
        'style/semi': ['error', 'always'],
      },
    })
  }

  if (options?.astro) {
    configs.push({
      name: 'mouse/astro',
      files: [GLOB_ASTRO],
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    })
  }

  return antfu(options, ...configs, ...userConfigs)
}
