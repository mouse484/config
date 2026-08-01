import type { OxlintConfig } from 'oxlint'
import type { ConfigOptions } from './configs/index.js'

export type Options = ConfigOptions

declare function lint(options?: Options): OxlintConfig

export {
  lint,
}
