import type { OxlintConfig } from 'oxlint'
import type { Options } from './configs'

declare function lint(options: Options, config?: OxlintConfig): OxlintConfig

export { lint }
export { type Options } from './configs'
