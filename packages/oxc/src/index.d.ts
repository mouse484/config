import type { OxfmtConfig } from 'oxfmt'
import type { OxlintConfig } from 'oxlint'
import type { Options } from './configs'

declare function lint(options: Options, config?: OxlintConfig): OxlintConfig

declare function format(config?: OxfmtConfig): OxfmtConfig

export { format, lint }
export { type Options } from './configs'
