/**
@type {import('./factory').createConfigs}
 */
export function createConfigs({ name, enable = true, options, configs }) {
  return {
    name,
    enable,
    options,
    build: (context, overriddenOptions) => {
      const local = { ...context, options: { ...options, ...overriddenOptions } }
      return configs.flatMap((item) => {
        const config = typeof item === 'function' ? item(local) : item
        return config ? [config] : []
      })
    },
  }
}
