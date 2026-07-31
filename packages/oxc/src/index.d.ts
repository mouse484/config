import type { OxlintConfig } from 'oxlint'

export interface Options {
  tanstackRouter?: boolean
}

declare function mouse(options: Options): OxlintConfig
export default mouse
