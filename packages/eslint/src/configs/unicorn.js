import { GLOB_MARKDOWN_CODE_BLOCK, GLOB_README } from '../const/glob.js';
import { createConfigs } from '../lib/factory.js';

export default createConfigs({
  name: 'unicorn',
  baseWithOptions: ['unicorn'],
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
      },
    },
    {
      name: 'filename-case',
      files: [GLOB_README, GLOB_MARKDOWN_CODE_BLOCK],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
});
