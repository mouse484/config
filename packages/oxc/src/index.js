import buildConfigs from './configs/index.js'

const DEFAULT_CATEGORIES = {
  correctness: 'error',
  suspicious: 'warn',
  pedantic: 'warn',
  perf: 'warn',
  style: 'warn',
  restriction: 'warn',
  nursery: 'warn',
}

const OBJECT_KEYS = ['settings', 'env', 'globals', 'options']
const ARRAY_KEYS = ['ignorePatterns']
const HOISTED_KEYS = [...OBJECT_KEYS, ...ARRAY_KEYS, 'categories']

/**
@type {import('.').lint}
 */
export function lint(options, config = {}) {
  const all = [...buildConfigs(options), config]

  /** @type {Record<string, any>} */
  const root = {
    categories: { ...DEFAULT_CATEGORIES, ...config.categories },
  }

  for (const item of all) {
    for (const key of OBJECT_KEYS) {
      // @ts-expect-error - hoisted keys are not part of the OxlintConfig index signature
      // eslint-disable-next-line ts/no-unsafe-assignment
      const value = item[key]
      if (value !== undefined) {
        // eslint-disable-next-line ts/no-unsafe-assignment
        root[key] = { ...root[key], ...value }
      }
    }
    for (const key of ARRAY_KEYS) {
      // @ts-expect-error - hoisted keys are not part of the OxlintConfig index signature
      // eslint-disable-next-line ts/no-unsafe-assignment
      const value = item[key]
      if (value !== undefined) {
        // eslint-disable-next-line ts/no-unsafe-assignment
        root[key] = [...new Set([...(root[key] ?? []), ...value])]
      }
    }
  }

  return {
    ...root,
    extends: all
      .map((item) => {
        const rest = { ...item }
        for (const key of HOISTED_KEYS) {
          // @ts-expect-error - delete hoisted keys
          delete rest[key]
        }
        return rest
      })
      .filter(item => Object.keys(item).length > 0),
  }
}
