import antfu, {
  GLOB_ASTRO,
  GLOB_SVELTE,
} from '@antfu/eslint-config'
import { CASES } from './const/cases.js'
import { GLOB_MARKDOWN_CODE_BLOCK, GLOB_README, GLOB_SVELTE_ROUTES } from './const/glob.js'

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
              case: CASES.camelCase,
            },
          ],
        },
      },
      {
        name: 'mouse/svelte/kit-routes',
        files: [GLOB_SVELTE_ROUTES],
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
              args: true,
            },
          },
        ],
      },
    }, {
      name: 'mouse/unicorn/filename-case',
      files: [
        GLOB_README,
        GLOB_MARKDOWN_CODE_BLOCK,
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
export * from './const/glob.js'
export * from '@antfu/eslint-config'
