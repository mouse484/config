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
        if (typeof item === 'function') {
          const config = item(context)
          return config ? [config] : []
        }
        return [item]
      })
    },
  }
}
