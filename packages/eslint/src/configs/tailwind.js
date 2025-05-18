import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import { createConfigs } from '../lib/factory.js';

export default createConfigs({
  name: 'tailwind',
  baseWithOption: 'tailwind',
  configs: [
    (meta) => {
      return {
        name: 'readable-tailwind',
        plugins: {
          'readable-tailwind': eslintPluginReadableTailwind,
        },
        rules: {
          ...eslintPluginReadableTailwind.configs.warning.rules,
          'readable-tailwind/multiline': ['warn', {
            group: 'emptyLine',
          }],
        },
        settings: {
          'readable-tailwind': {
            entryPoint: meta?.entryPoint,
          },
        },
      };
    },
  ],
});
