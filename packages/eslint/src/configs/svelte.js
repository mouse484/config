import { CASES } from '../const/cases.js'
import { GLOB_SVELTE_COMPONENTS, GLOB_SVELTE_ROUTES } from '../const/glob.js'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'svelte',
  baseWithOption: 'svelte',
  configs: [
    {
      name: 'components',
      withOptions: ['unicorn'],
      files: [GLOB_SVELTE_COMPONENTS],
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
      name: 'kit/routes',
      withOptions: ['unicorn'],
      files: [GLOB_SVELTE_ROUTES],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
})
