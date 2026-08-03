import { defineConfig } from 'oxlint'
import buildConfigs from './configs/index.js'

/** @type {import('.').lint} */
export function lint(options) {
  return defineConfig({
    categories: {
      correctness: 'error',
      suspicious: 'warn',
      pedantic: 'warn',
      perf: 'warn',
      style: 'warn',
      restriction: 'warn',
      nursery: 'warn',
    },
    // @ts-expect-error - buildConfigs returns a Config[]
    // eslint-disable-next-line ts/no-unsafe-assignment
    extends: buildConfigs(options),
  })
}
