/**
 *
 * @param {string} name
 * @param {(keyof import('./type').Options)[]} withOptions
 * @param {Omit<import('@antfu/eslint-config').TypedFlatConfigItem,'name'>} config
 * @returns {(options: import('./type').Options) => import('@antfu/eslint-config').TypedFlatConfigItem} config factory
 */
function createConfig(name, withOptions, config) {
  return (options) => {
    const allowApply = withOptions
      ? withOptions.every(key => key in options)
      : true;
    if (!allowApply) {
      return {};
    }
    return {
      name: `mouse/${name}`,
      ...config,
    };
  };
}

/** @type {import('./type').createConfigs} */
export function createConfigs({ name, baseWithOptions = [], configs }) {
  return (options) => {
    return configs.map(({ name: configName, withOptions = [], ...restConfig }) => {
      return createConfig(
        `${name}/${configName}`,
        [...baseWithOptions, ...withOptions],
        restConfig,
      )(options);
    });
  };
}
