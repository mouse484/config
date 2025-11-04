#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { resolveCommand } from 'package-manager-detector/commands'
import { detect } from 'package-manager-detector/detect'

const PACKAGE_NAME = {
  BASE: '@antfu/eslint-config',
  CUSTOM: '@mouse_484/eslint-config',
}

/**
 * Simple logger function
 * @param {*} message
 */
function logger(message) {
  console.info('@mouse_484/eslint-config:', message)
}

/**
 * @type {(...args: Parameters<typeof import("package-manager-detector/commands").resolveCommand>) => Promise<void>}
 */
function runAgentCommand(agent, command_, args_) {
  const { command, args } = resolveCommand(agent, command_, args_)
  console.info(`Running command: ${command} ${args.join(' ')}`)
  return new Promise((resolve, reject) => {
    const child = spawn(
      command,
      args,
      {
        stdio: 'inherit',
      },
    )

    child.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command failed: ${code} (${command} ${args.join(' ')})`))
      }
    })
    child.on('error', (error) => {
      reject(error)
    })
  })
}

async function main() {
  const cwd = process.cwd()
  logger('Starting setup')

  const packageManager = await detect() ?? {
    name: 'npm',
    agent: 'npm',
    version: 'unknown',
  }

  logger(`Detected package manager: ${packageManager.name}`)

  logger(`Setting up base package ${PACKAGE_NAME.BASE}`)
  await runAgentCommand(
    packageManager.agent,
    'execute',
    ['-y', `${PACKAGE_NAME.BASE}@latest`],
  )
  logger('Modifying base config to custom config')

  logger(`Uninstalling base package ${PACKAGE_NAME.BASE}`)
  await runAgentCommand(
    packageManager.agent,
    'uninstall',
    [PACKAGE_NAME.BASE],
  )
  logger(`Installing custom package ${PACKAGE_NAME.CUSTOM}`)
  await runAgentCommand(
    packageManager.agent,
    'install',
    ['-D', PACKAGE_NAME.CUSTOM],
  )

  logger('Updating package.json scripts')
  const packageJsonPath = path.join(cwd, 'package.json')
  /**
   * @type {{ scripts: Record<string, string>, type?: "module" }}
   */
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
  packageJson.scripts = {
    ...packageJson.scripts,
    'lint': 'eslint .',
    'lint:fix': 'eslint --fix .',
  }
  await writeFile(packageJsonPath, JSON.stringify(packageJson, undefined, 2), 'utf8')

  logger('Updating config file')
  const configPath = path.join(cwd, `eslint.config.${packageJson.type === 'module' ? 'js' : 'mjs'}`)
  await writeFile(configPath, `
import mouse from '${PACKAGE_NAME.CUSTOM}'

export default mouse()
`.trim(), 'utf8')

  logger('Linting the project to verify setup')
  await runAgentCommand(
    packageManager.agent,
    'run',
    ['lint:fix'],
  ).catch((error) => {
    logger(`Linting failed: ${error.message}`)
  })
}

console.info('---------------- Setting up @mouse_484/eslint-config ----------------')
await main()
console.info('---------------- Setup Complete ----------------')
