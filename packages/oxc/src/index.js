import { defineConfig } from 'oxlint'
import buildConfigs from './configs'

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
    // @ts-expect-error - build configs with options
    extends: [buildConfigs(options)],
  })
}
