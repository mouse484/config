import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
// eslint-disable-next-line test/no-import-node-test -- This package uses the built-in test runner.
import { test } from 'node:test'
import { createPackageDetector } from './packages.js'

void test('detects packages from the consumer, including import-only and types-only packages', (context) => {
  const root = mkdtempSync(path.join(tmpdir(), 'oxc-package-detection-'))
  context.after(() => rmSync(root, { recursive: true, force: true }))

  const project = path.join(root, 'project')
  mkdirSync(project)
  const fixtures = {
    'import-only': { exports: { import: './index.js' }, type: 'module' },
    'hidden-manifest': { exports: './index.js', type: 'module' },
    '@types/example': { types: './index.d.ts' },
    'conditional': { exports: { import: './index.js', require: './missing.cjs' }, type: 'module' },
  }
  for (const [name, manifest] of Object.entries(fixtures)) {
    const directory = path.join(root, 'node_modules', name)
    mkdirSync(directory, { recursive: true })
    writeFileSync(path.join(directory, 'package.json'), JSON.stringify({ name, ...manifest }))
    if (!('types' in manifest)) {
      writeFileSync(path.join(directory, 'index.js'), 'export {}\n')
    }
    writeFileSync(path.join(directory, 'index.d.ts'), 'export {}\n')
  }

  const detect = createPackageDetector(project)
  for (const name of Object.keys(fixtures)) {
    assert.equal(detect(name), true, name)
  }
  assert.equal(detect('missing-package'), false)
  // Packages installed beside the config must not enable consumer presets.
  assert.equal(detect('eslint-plugin-antfu'), false)

  symlinkSync(path.join(root, 'node_modules/import-only'), path.join(root, 'node_modules/linked-package'), 'junction')
  assert.equal(detect('linked-package'), true)

  const broken = path.join(root, 'node_modules/broken-export')
  mkdirSync(broken)
  writeFileSync(path.join(broken, 'package.json'), JSON.stringify({ exports: './missing.js' }))
  assert.equal(detect('broken-export'), false)
})

void test('a new detector observes the current project and newly installed packages', (context) => {
  const root = mkdtempSync(path.join(tmpdir(), 'oxc-package-detection-'))
  context.after(() => rmSync(root, { recursive: true, force: true }))
  const detect = createPackageDetector(root)
  assert.equal(detect('react'), false)

  const directory = path.join(root, 'node_modules/react')
  mkdirSync(directory, { recursive: true })
  writeFileSync(path.join(directory, 'package.json'), JSON.stringify({ name: 'react' }))
  assert.equal(createPackageDetector(root)('react'), true)
})
