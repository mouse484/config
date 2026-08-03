import type { OxlintConfig } from 'oxlint'
import type { Options } from './configs'

declare function lint(options?: Options): OxlintConfig

export { lint }
