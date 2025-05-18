import { GLOB_ASTRO } from '@antfu/eslint-config';
import { createConfigs } from '../lib/factory.js';

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
  ],
});
