import { CASES } from '../const/cases.js'
import { GLOB_D_TS, GLOB_MARKDOWN_CODE_BLOCK, GLOB_README } from '../const/glob.js'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'unicorn',
  baseWithOption: 'unicorn',
  configs: [
    {
      name: 'general',
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
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/consistent-function-scoping': [
          'error',
          {
            checkArrowFunctions: false,
          },
        ],
      },
    },
    {
      name: 'ignore-filename-case',
      files: [
        GLOB_README,
        '**/AGENTS.md',
        GLOB_MARKDOWN_CODE_BLOCK,
        '**/*env.d.ts',
      ],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      name: 'allow-abbreviations',
      files: [
        '**/*env.d.ts',
      ],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      name: 'd.ts',
      withOptions: ['typescript'],
      files: [GLOB_D_TS],
      rules: {
        'unicorn/require-module-specifiers': 'off',
      },
    },
    {
      name: 'react-components',
      withOptions: ['react'],
      files: [
        `**/src/components/**/*.{j,t}sx`,
      ],
      rules: {
        'unicorn/filename-case': [
          'error',
          { case: CASES.PascalCase },
        ],
      },
    },
  ],
})
