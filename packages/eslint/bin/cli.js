#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { resolveCommand } from 'package-manager-detector/commands';
import { detect } from 'package-manager-detector/detect';

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
};

/** @type {PackageInfo} */
const TARGET = {
  name: '@mouse_484/eslint-config',
  import: 'mouse',
};

const PACKAGE_JSON_FILE = 'package.json';
const ESLINT_CONFIG_JS_FILE = 'eslint.config.js';
const ESLINT_CONFIG_MJS_FILE = 'eslint.config.mjs';

// infinite loop prevention
const isRunningFromSourcePackage = process.argv[1].includes(SOURCE.name);

/**
 * Execute command with spawn
 * @param {string} command - Command to execute
 * @param {string[]} args - Command arguments
 * @returns {Promise<void>}
 */
function runCommand(command, args = []) {
  console.info(`Running: ${command} ${args.join(' ')}`);
  const spawnedProcess = spawn(command, args, { stdio: 'inherit' });

  return new Promise((resolve, reject) => {
    spawnedProcess.on('close', (code) => {
      if (code === 0) {
        setTimeout(() => {
          resolve();
        }, 300);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
    spawnedProcess.on('error', reject);
  });
}

/**
 * Update JSON file with transform function
 * @param {string} filePath - JSON file path
 * @param {(data: any) => any} updateFunction - Transform function
 */
async function updateJSONFile(filePath, updateFunction) {
  const content = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(content);
  const updated = updateFunction(data);
  await fs.writeFile(filePath, JSON.stringify(updated, undefined, 2));
  return updated;
}

async function main() {
  console.info('Starting ESLint config setup...');

  if (isRunningFromSourcePackage) {
    console.error(
      `Please run this script from the root of your project, not from ${SOURCE.name} package.`,
    );
    process.exitCode = 1;
    return;
  }

  const pm = await detect();
  if (!pm) {
    console.error(
      'Could not detect package manager. '
      + 'Please ensure you are in a project with a package.json file.',
    );
    process.exitCode = 1;
    return;
  }

  const installCmd = resolveCommand(pm.agent, 'add', ['-D', SOURCE.name]);
  await runCommand(installCmd.command, installCmd.args);
  console.info(`Installed ${SOURCE.name}`);

  const execCmd = resolveCommand(pm.agent, 'execute', [SOURCE.name]);
  await runCommand(execCmd.command, execCmd.args);

  console.info(`Start replacing the config from ${SOURCE.name} to ${TARGET.name}`);

  const cwd = process.cwd();
  const packageJSONPath = path.join(cwd, PACKAGE_JSON_FILE);

  const package_ = await updateJSONFile(packageJSONPath, (packageData) => {
    packageData.devDependencies = packageData.devDependencies || {};
    delete packageData.devDependencies[SOURCE.name];

    let targetVersion;
    try {
      targetVersion = execSync(`npm view ${TARGET.name} dist-tags.latest`).toString().trim();
    } catch (error) {
      console.warn(
        `Warning: Could not fetch latest version for ${TARGET.name}, using 'latest'. `
        + `Error: ${error.message}`,
      );
      targetVersion = 'latest';
    }
    TARGET.version = targetVersion;
    packageData.devDependencies[TARGET.name] = targetVersion;

    packageData.scripts = {
      ...packageData.scripts,
      'lint': 'eslint .',
      'lint:fix': 'eslint --fix .',
    };

    return packageData;
  });

  const configExtension = package_.type === 'module' ? 'js' : 'mjs';
  const eslintConfigFile = configExtension === 'js' ? ESLINT_CONFIG_JS_FILE : ESLINT_CONFIG_MJS_FILE;
  const configPath = path.join(cwd, eslintConfigFile);

  let configContent = await fs.readFile(configPath, 'utf8');
  configContent = configContent
    .replace(
      `import ${SOURCE.import} from '${SOURCE.name}'`,
      `import ${TARGET.import} from '${TARGET.name}'`,
    )
    .replaceAll(new RegExp(`(?<!['"])${SOURCE.import}(?!['"])`, 'g'), TARGET.import);
  await fs.writeFile(configPath, configContent);

  const finalInstallCmd = resolveCommand(pm.agent, 'install', []);
  await runCommand(finalInstallCmd.command, finalInstallCmd.args);

  console.info(`Successfully replaced the config from ${SOURCE.name} to ${TARGET.name}`);
}

await main();
