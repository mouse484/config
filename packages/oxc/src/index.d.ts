import type { OxlintConfig } from 'oxlint'
import type { CustomOptions } from './configs/index.js'

export type Options = CustomOptions

declare function lint(options?: Options): OxlintConfig

export {
  lint,
}
