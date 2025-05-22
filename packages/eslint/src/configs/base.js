import { createConfigs } from '../lib/factory.js';

export default createConfigs({
  name: 'base',
  configs: [
    {
      name: 'antfu',
      rules: {
        'antfu/no-top-level-await': 'off',
        'antfu/if-newline': 'off',
      },
    },
  ],
});
