import antfu from '@antfu/eslint-config';
import astro from './configs/astro.js';
import base from './configs/base.js';
import stylistic from './configs/stylistic.js';
import svelte from './configs/svelte.js';
import unicorn from './configs/unicorn.js';

/** @type {import('./lib/type.js').mouse} */
async function mouse(options, ...userConfigs) {
  options = {
    lessOpinionated: true,
    unicorn: {
      allRecommended: true,
    },
    ...options,
  };

  const configs = [
    ...astro(options),
    ...base(options),
    ...stylistic(options),
    ...svelte(options),
    ...unicorn(options),
  ];

  return antfu(options, ...configs, ...userConfigs);
}

export default mouse;
export { mouse };
export * from './const/glob.js';
export * from '@antfu/eslint-config';
