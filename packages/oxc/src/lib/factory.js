/** @type {import('./factory').createConfigs} */
export function createConfigs({ name, defaultEnabled, options, configs }) {
  return {
    name,
    defaultEnabled,
    build: (overriddenOptions) => {
      if (typeof configs === 'function') {
        // @ts-expect-error - build configs
        configs = configs({
          ...options,
          ...overriddenOptions,
        })
      }
      return configs
    },
  }
}
