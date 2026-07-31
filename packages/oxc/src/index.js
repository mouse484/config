import { defineConfig } from 'oxlint'
import configs from './configs/index.js'

/** @param {import('.').Options} [options] */
export default function mouse(options = {}) {
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
    extends: configs(options),
  })
}
