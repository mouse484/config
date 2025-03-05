#!/usr/bin/env node
import { exec as _exec, spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'
import { resolveCommand } from 'package-manager-detector/commands'
import { detect } from 'package-manager-detector/detect'

const exec = promisify(_exec)

/**
 * @typedef {object} PackageInfo
 * @property {string} name - Package name
 * @property {string} import - Import name in config
 */

/** @type {PackageInfo} */
const SOURCE = {
  name: '@antfu/eslint-config',
  import: 'antfu',
}

/** @type {PackageInfo} */
const TARGET = {
  name: '@mouse_484/eslint-config',
  import: 'mouse',
}

/**
 *
 * @param {string} command
 * @param {string} args
 * @param {import('node:child_process').SpawnOptions} options
 * @returns {Promise} - Promise Spawn Result
 */
function spawnAsync(command, args, options = { stdio: 'inherit' }) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options)
    child.on('close', resolve)
    child.on('error', reject)
  })
}

async function main() {
  const pm = await detect()

  // Install source config
  const installCmd = resolveCommand(pm.agent, 'add', ['-D', SOURCE.name])
  await spawnAsync(installCmd.command, installCmd.args)
  console.log(`Installed ${SOURCE.name}`)

  // Run source config setup
  const execCmd = resolveCommand(pm.agent, 'execute', [SOURCE.name])
  await spawnAsync(execCmd.command, execCmd.args)

  console.log(`Start replacing the config from ${SOURCE.name} to ${TARGET.name}`)

  // Update package.json
  const cwd = process.cwd()
  const packageJSONPath = path.join(cwd, 'package.json')
  const packageJSON = await fs.readFile(packageJSONPath, 'utf-8')
  /** @type {Record<string,unknown>} */
  const pkg = JSON.parse(packageJSON)

  // Initialize devDependencies if it doesn't exist
  pkg.devDependencies = pkg.devDependencies || {}
  delete pkg.devDependencies[SOURCE.name]

  // Get latest version of target package
  const { stdout } = await exec(`npm view ${TARGET.name} dist-tags.latest`)
    .catch(() => ({ stdout: 'latest' }))
  pkg.devDependencies[TARGET.name] = stdout.trim()

  // Update scripts
  pkg.scripts = {
    ...pkg.scripts,
    'lint': 'eslint .',
    'lint:fix': 'eslint --fix .',
  }
  await fs.writeFile(packageJSONPath, JSON.stringify(pkg, null, 2))

  // Update or create ESLint config
  const configExt = pkg.type === 'module' ? 'js' : 'mjs'
  const configPath = path.join(cwd, `eslint.config.${configExt}`)

  let configContent = await fs.readFile(configPath, 'utf-8')
  configContent = configContent
    .replace(
      `import ${SOURCE.import} from '${SOURCE.name}'`,
      `import ${TARGET.import} from '${TARGET.name}'`,
    )
    .replace(SOURCE.import, TARGET.import)
  await fs.writeFile(configPath, configContent)

  // Install dependencies after all changes
  const finalInstallCmd = resolveCommand(pm.agent, 'install')
  await spawnAsync(finalInstallCmd.command, finalInstallCmd.args)

  console.log(`Successfully replaced the config from ${SOURCE.name} to ${TARGET.name}`)
}

main()
