import { createResolver } from 'exsolve'

/**
 * Create a package detector rooted in the consuming project.
 * @param {string} [cwd] Project directory
 * @returns {(name: string) => boolean} Package detector
 */
export function createPackageDetector(cwd) {
  const { resolveModulePath } = createResolver({ from: cwd, cache: false })

  return (name) => {
    // Check the manifest first to support packages containing only types.
    return Boolean(
      resolveModulePath(`${name}/package.json`, { try: true })
      || resolveModulePath(name, { try: true }),
    )
  }
}
