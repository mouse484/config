import { defineConfig } from 'oxlint'
import perfectionist from './customs/perfectionist.js'
import tanstackRouter from './customs/tanstack-router.js'
import eslint from './rules/eslint.js'
import oxc from './rules/oxc.js'
import typescript from './rules/typescript.js'

/** @type {Record<keyof import('.').Options, import('oxlint').OxlintConfig>} */
const customs = {
  tanstackRouter,
  perfectionist,
}

/** @type {import('.').default} */
export default function mouse(options = {}) {
  const enabledCustoms = Object.entries(customs).flatMap(([key, value]) => {
    const defaultEnabled = ['perfectionist']
    if (Object.hasOwn(options, key) || defaultEnabled.includes(key)) {
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
