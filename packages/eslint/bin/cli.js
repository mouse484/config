#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { resolveCommand } from 'package-manager-detector/commands'
import { detect } from 'package-manager-detector/detect'

/**
 * @typedef {object} PackageInfo
 * @property {string} name - Package name
 * @property {string} import - Import name in config
 * @property {string} [version] - Package version
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

// infinite loop prevention
const isRunningFromSourcePackage = process.argv[1].includes(SOURCE.name)

/**
 * Execute command with spawn
 * @param {string} command - Command to execute
 * @param {string[]} args - Command arguments
 * @returns {Promise<void>}
 */
function runCommand(command, args) {
  console.info(`Running: ${command} ${args.join(' ')}`)
  const spawnedProcess = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    spawnedProcess.on('close', (code) => {
      if (code === 0) {
        resolve()
      }
      else {
        reject(new Error(`Command failed with exit code ${code}`))
      }
    })
    spawnedProcess.on('error', reject)
  })
}

/**
 * Update JSON file with transform function
 * @param {string} filePath - JSON file path
 * @param {(data: any) => any} updateFn - Transform function
 */
async function updateJSONFile(filePath, updateFn) {
  const content = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(content)
  const updated = updateFn(data)
  await fs.writeFile(filePath, JSON.stringify(updated, null, 2))
  return updated
}

/**
 * Update eslint.config file content
 * @param {string} configPath - Config file path
 * @param {PackageInfo} source - Source package info
 * @param {PackageInfo} target - Target package info
 */
async function updateConfigFile(configPath, source, target) {
  let configContent = await fs.readFile(configPath, 'utf-8')
  configContent = configContent
    .replace(
      `import ${source.import} from '${source.name}'`,
      `import ${target.import} from '${target.name}'`,
    )
    .replace(source.import, target.import)
  await fs.writeFile(configPath, configContent)
}

/**
 * Get latest version of a package
 * @param {string} packageName - Package name
 * @returns {string} Version number
 */
function getLatestVersion(packageName) {
  try {
    return execSync(`npm view ${packageName} dist-tags.latest`).toString().trim()
  }
  catch {
    console.warn(`Warning: Could not fetch latest version for ${packageName}, using 'latest' tag`)
    return 'latest'
  }
}

async function main() {
  console.info('Starting ESLint config setup...')

  if (isRunningFromSourcePackage) {
    console.warn(`Detected execution from ${SOURCE.name}. Skipping to avoid recursive calls.`)
    return
  }

  try {
    const pm = await detect()

    const installCmd = resolveCommand(pm.agent, 'add', ['-D', SOURCE.name])
    await runCommand(installCmd.command, installCmd.args)
    console.info(`Installed ${SOURCE.name}`)

    const execCmd = resolveCommand(pm.agent, 'execute', [SOURCE.name])
    await runCommand(execCmd.command, execCmd.args)

    console.info(`Start replacing the config from ${SOURCE.name} to ${TARGET.name}`)

    const cwd = process.cwd()
    const packageJSONPath = path.join(cwd, 'package.json')

    const pkg = await updateJSONFile(packageJSONPath, (pkgData) => {
      pkgData.devDependencies = pkgData.devDependencies || {}
      delete pkgData.devDependencies[SOURCE.name]

      TARGET.version = getLatestVersion(TARGET.name)
      pkgData.devDependencies[TARGET.name] = TARGET.version

      pkgData.scripts = {
        ...pkgData.scripts,
        'lint': 'eslint .',
        'lint:fix': 'eslint --fix .',
      }

      return pkgData
    })

    const configExt = pkg.type === 'module' ? 'js' : 'mjs'
    const configPath = path.join(cwd, `eslint.config.${configExt}`)
    await updateConfigFile(configPath, SOURCE, TARGET)

    const finalInstallCmd = resolveCommand(pm.agent, 'install')
    await runCommand(finalInstallCmd.command, finalInstallCmd.args)

    console.info(`Successfully replaced the config from ${SOURCE.name} to ${TARGET.name}`)
  }
  catch (error) {
    console.error('Error during ESLint config setup:', error.message)
    process.exit(1)
  }
}

main()
