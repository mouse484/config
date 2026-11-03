import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test -- This package uses the built-in test runner.
import { test } from 'node:test'
import { lint } from './lint.js'

void test('merges and deduplicates ignore patterns in order', () => {
  const config = lint({ tanstack: true }, {
    ignorePatterns: ['**/src/routeTree.gen.ts', 'custom/**'],
  })
  assert.deepEqual(config.ignorePatterns, ['**/src/routeTree.gen.ts', 'custom/**'])
  assert.equal(config.extends?.some(item => item.ignorePatterns !== undefined), false)
})

void test('preserves an explicitly empty ignore list', () => {
  const config = lint({ tanstack: false }, { ignorePatterns: [] })
  assert.deepEqual(config.ignorePatterns, [])
})
