import { GLOB_MARKDOWN } from '@antfu/eslint-config';
import { createConfigs } from '../lib/factory.js';

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
        'style/semi': ['error', 'always'],
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
  ],
});
