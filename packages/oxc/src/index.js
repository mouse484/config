import defu from 'defu'
import buildConfigs from './configs/index.js'

/**
@type {import('.').lint}
 */
export function lint(options, config = {}) {
  // @ts-expect-error - deep merge config with default config
  return defu(
    config,
    {
      categories: {
        correctness: 'error',
        suspicious: 'warn',
        pedantic: 'warn',
        perf: 'warn',
        style: 'warn',
        restriction: 'warn',
        nursery: 'warn',
      },
    },
    // @ts-expect-error - buildConfigs returns a Config[]
    // eslint-disable-next-line ts/no-unsafe-argument
    ...buildConfigs(options),
  )
}
