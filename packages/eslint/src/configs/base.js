import { createConfigs } from '../lib/factory.js';

export default createConfigs({
  name: 'base',
  configs: [
    {
      name: 'antfu',
      rules: {
        'antfu/top-level-function': 'off',
      },
    },
  ],
});
