// @ts-check
import antfu, {
  GLOB_ASTRO,
  GLOB_SRC,
  GLOB_SVELTE,
} from '@antfu/eslint-config'

/** @type {Record<string, "camelCase" | "pascalCase" | "snakeCase" | "kebabCase">} */
const CASES = {
  'camelCase': 'camelCase',
  'PascalCase': 'pascalCase',
  'snake_case': 'snakeCase',
  'kebab-case': 'kebabCase',
}

/** @type {import('@antfu/eslint-config')["antfu"]} */
async function mouse(options, ...userConfigs) {
  options = {
    lessOpinionated: true,
    unicorn: {
      allRecommended: true,
    },
    ...options,
  }

  /** @type {import('@antfu/eslint-config').TypedFlatConfigItem[]} */
  const configs = [
    {
      name: 'mouse/antfu-config',
      rules: {
        'antfu/top-level-function': 'off',
      },
    },
    {
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
    },
  ]

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

  if (options?.svelte) {
    configs.push({
      name: 'mouse/svelte',
      files: [GLOB_SVELTE],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: CASES.PascalCase,
          },
        ],
      },
    })
  }

  if (options?.unicorn) {
    configs.push({
      name: 'mouse/unicorn',
      rules: {
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              Props: true,
            },
          },
        ],
      },
    })
  }

  return antfu(options, ...configs, ...userConfigs)
}

export default mouse
export { mouse }
export * from '@antfu/eslint-config'
