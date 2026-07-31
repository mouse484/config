import { defineConfig } from 'oxlint'
import tanstackRouter from './customs/tanstack-router.js'
import eslint from './rules/eslint.js'
import oxc from './rules/oxc.js'
import typescript from './rules/typescript.js'

/** @type {Record<keyof import('.').Options, import('oxlint').OxlintConfig>} */
const customs = {
  tanstackRouter,
}

/** @type {import('.').default} */
export default function mouse(options = {}) {
  const enabledCustoms = Object.entries(customs).flatMap(([key, value]) => {
    if (Object.hasOwn(options, key)) {
      return [value]
    }
    return []
  })

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
    extends: [
      eslint,
      oxc,
      typescript,
      ...enabledCustoms,
    ],
  })
}
