/** @type {import('./factory').createConfigs} */
export function createConfigs({ name, defaultEnabled, options, configs }) {
  return {
    name,
    defaultEnabled,
    options,
    build: (overriddenOptions) => {
      if (typeof configs === 'function') {
        // @ts-expect-error - build configs
        return configs({
          ...options,
          ...overriddenOptions,
        })
      }
      return configs
    },
  }
}
