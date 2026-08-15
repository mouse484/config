/**
@type {import('./factory').createConfigs}
 */
export function createConfigs({ name, enable = true, options, configs }) {
  return {
    name,
    enable,
    options,
    build: (context, overriddenOptions) => {
      const built = typeof configs === 'function'
        ? configs({
            ...options,
            ...overriddenOptions,
          })
        : configs
      return built.flatMap((item) => {
        const config = typeof item === 'function' ? item(context) : item
        return config ? [config] : []
      })
    },
  }
}
