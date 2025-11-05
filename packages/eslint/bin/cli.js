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
async function runAgentCommand(agent, command_, args_) {
  const result = resolveCommand(agent, command_, args_)
  if (!result) {
    throw new Error(`Unsupported package manager or command: ${agent} ${command_}`)
  }
  const { command, args } = result
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

  const packageJsonRaw = await readFile(packageJsonPath, 'utf8')
  /**
   * @type {{ scripts?: Record<string, string>, type?: "module" }}
   */
  // eslint-disable-next-line ts/no-unsafe-assignment
  const packageJson = JSON.parse(packageJsonRaw) ?? {}

  packageJson.scripts = {
    ...packageJson.scripts,
    'lint': 'eslint .',
    'lint:fix': 'eslint --fix .',
  }
  await writeFile(packageJsonPath, JSON.stringify(packageJson, undefined, 2), 'utf8')

  logger('Updating config file')
  const configPath = path.join(cwd, `eslint.config.${packageJson.type === 'module' ? 'js' : 'mjs'}`)
  const config = await readFile(configPath, 'utf8')
  await writeFile(
    configPath,
    config
      .replace(
        'import antfu from \'@antfu/eslint-config\'',
        'import mouse from \'@mouse_484/eslint-config\'',
      )
      .replace('antfu', 'mouse'),
    'utf8',
  )

  logger('Linting the project to verify setup')
  await runAgentCommand(
    packageManager.agent,
    'run',
    ['lint:fix'],
  ).catch((error) => {
    if (error instanceof Error) {
      logger(`Linting failed: ${error.message}`)
    }
  })
}

await main()
console.info('---------------- Setup Complete ----------------')
