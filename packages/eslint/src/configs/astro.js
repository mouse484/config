import { GLOB_ASTRO } from '@antfu/eslint-config'
import { CASES } from '../const/cases.js'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'astro',
  baseWithOption: 'astro',
  configs: [
    {
      name: 'general',
      files: [GLOB_ASTRO],
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    },
    {
      name: 'astro-components-filename-case',
      files: [GLOB_ASTRO],
      ignores: [`**/pages/${GLOB_ASTRO}`],
      rules: {
        'unicorn/filename-case': [
          'error',
          { case: CASES.PascalCase },
        ],
      },
    },
  ],
})
