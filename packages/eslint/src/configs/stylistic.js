import { GLOB_JSX, GLOB_MARKDOWN, GLOB_TSX } from '@antfu/eslint-config'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'stylistic',
  baseWithOption: 'stylistic',
  configs: [
    {
      name: 'general',
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
        'style/semi': ['error', 'never'],
      },
    },
    {
      name: 'markdown',
      files: [GLOB_MARKDOWN],
      rules: {
        'style/max-len': [
          'error',
          {
            code: 120,
            ignoreUrls: true,
            ignorePattern: String.raw`^\s*\|`,
          },
        ],
      },
    },
    {
      name: 'json',
      files: ['**/*.json*'],
      rules: {
        'style/max-len': 'off',
      },
    },
    {
      name: 'jsx',
      files: [GLOB_JSX, GLOB_TSX],
      rules: {
        'style/jsx-self-closing-comp': 'error',
        'style/jsx-curly-brace-presence': ['error', {
          propElementValues: 'always',
          props: 'never',
        }],
        'style/jsx-sort-props': 'off', // perfectionist/sort-jsx-props is used instead
      },
    },
  ],
})
