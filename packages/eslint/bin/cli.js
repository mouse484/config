#!/usr/bin/env node
import { exec as _exec, spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'

const exec = promisify(_exec)

const antfu = '@antfu/eslint-config'
const mouse = '@mouse_484/eslint-config'

// Run the original CLI
const execCLI = () => {
  const child = spawn('npx', [antfu], {
    stdio: 'inherit',
  })
  return new Promise((resolve, reject) => {
    child.on('exit', resolve)
    child.on('error', reject)
  })
}

await execCLI()

// Replace the config
const cwd = process.cwd()

const packageJSONPath = path.join(cwd, 'package.json')
const packageJSON = await fs.readFile(packageJSONPath, 'utf-8')
/** @type {Record<string,unknown>} */
const pkg = JSON.parse(packageJSON)

// Replace ESLint config
const eslintConfigPath = path.join(cwd, `eslint.config.${pkg.type === 'module' ? 'js' : 'mjs'}`)
const eslintConfig = await fs.readFile(eslintConfigPath, 'utf-8')

eslintConfig.replace(
  `import antfu from '${antfu}'`,
  `import { mouse } from '${mouse}'`,
)
eslintConfig.replace(
  'antfu',
  'mouse',
)

await fs.writeFile(eslintConfigPath, eslintConfig)

// Replace package.json
delete pkg.devDependencies[antfu]

const version = (await exec(`npm view ${mouse} dist-tags.latest`).catch(() => {
  console.info(`Failed to get the latest version of ${mouse}`)
  return { stdout: 'latest' }
})).stdout.trim()

pkg.devDependencies[mouse] = version

pkg.scripts = {
  ...pkg.scripts,
  'lint': 'eslint .',
  'lint:fix': 'eslint --fix .',
}

await fs.writeFile(packageJSONPath, JSON.stringify(pkg, null, 2))
