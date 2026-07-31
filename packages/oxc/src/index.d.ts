import type { OxlintConfig } from 'oxlint'
import type { CustomOptions } from './configs/index.js'

export type Options = CustomOptions

declare function mouse(options?: Options): OxlintConfig
export default mouse
