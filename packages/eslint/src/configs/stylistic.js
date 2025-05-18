import { createConfigs } from '../lib/factory.js';

export default createConfigs({ name: 'stylistic', baseWithOptions: ['stylistic'], configs: [
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
] });
