/**
 *
 * @param {string} name
 * @param {(keyof import('..').Options)[]?} withOptions
 * @param {Omit<import('@antfu/eslint-config').TypedFlatConfigItem,'name'>} config
 * @returns {(options: import('..').Options) => import('@antfu/eslint-config').TypedFlatConfigItem|[]} _
 */
function createConfig(name, withOptions, config) {
  return (options) => {
    const allowApply = withOptions
      ? withOptions.every(key => key in options)
      : true
    if (!allowApply) {
      return []
    }
    return {
      name: `mouse/${name}`,
      ...config,
    }
  }
}

/** @type {import('./factory').createConfigs} */
export function createConfigs({ name, baseWithOption, configs }) {
  return (options) => {
    return configs.flatMap((configItem) => {
      if (typeof configItem === 'function') {
        if (!baseWithOption) {
          throw new Error('baseWithOption is required when configItem is a function')
        }
        const meta = options[baseWithOption]
        // @ts-expect-error: may be undefined
        configItem = configItem(typeof meta === 'object' ? meta : undefined)
      }
      if (configItem === undefined) {
        return []
      }
      const { name: configName, withOptions = [], ...restConfig } = configItem
      return createConfig(
        `${name}/${configName}`,
        baseWithOption ? [baseWithOption, ...withOptions] : withOptions,
        restConfig,
      )(options)
    })
  }
}
