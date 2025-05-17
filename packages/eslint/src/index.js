// @ts-check
import antfu, {
  GLOB_ASTRO,
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
  ]

  if (options?.stylistic) {
    configs.push({
      name: 'mouse/stylistic',
      rules: {
        'style/max-len': [
          'error',
          {
            code: 100,
            tabWidth: 2,
            comments: 120,
            ignoreUrls: true,
          },
        ],
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
    configs.push(
      {
        name: 'mouse/svelte/components',
        files: [GLOB_SVELTE],
        rules: {
          'unicorn/filename-case': [
            'error',
            {
              case: CASES.PascalCase,
            },
          ],
        },
      },
      {
        name: 'mouse/svelte/kit-routes',
        files: ['**/src/routes/**/+([a-zA-Z0-9_]+).svelte'],
        rules: {
          'unicorn/filename-case': 'off',
        },
      },
    )
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
    }, {
      name: 'mouse/unicorn/filename-case',
      files: [
        '**/README.md',
        /**
         * Code block in markdown
         * @see https://github.com/eslint/markdown/blob/32d8cbd8b6d2d121225b5291c2f9a0ea6c2ccd00/docs/processors/markdown.md?plain=1#L96
         */
        '**/*.md/**',
      ],
      rules: {
        'unicorn/filename-case': 'off',
      },
    })
  }

  return antfu(options, ...configs, ...userConfigs)
}

export default mouse
export { mouse }
export * from '@antfu/eslint-config'
