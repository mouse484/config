import { GLOB_SRC } from '@antfu/eslint-config'
import { GLOB_D_TS, GLOB_MARKDOWN_CODE_BLOCK, GLOB_README } from '../const/glob.js'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'unicorn',
  baseWithOption: 'unicorn',
  configs: [
    {
      name: 'general',
      files: [GLOB_SRC],
      rules: {
        'unicorn/name-replacements': [
          'error',
          {
            allowList: {
              Props: true,
              Ref: true,
              args: true,
            },
          },
        ],
        'unicorn/expiring-todo-comments': 'off',
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
        '**/*skill*/**/SKILL.md',
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
        'unicorn/name-replacements': 'off',
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
  ],
})
