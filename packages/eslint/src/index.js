// @ts-check
import antfu, {
  GLOB_ASTRO,
  GLOB_SRC,
} from '@antfu/eslint-config'

/** @type {import('@antfu/eslint-config')["antfu"]} */
async function mouse(options, ...userConfigs) {
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

export default mouse
export { mouse }
export * from '@antfu/eslint-config'
