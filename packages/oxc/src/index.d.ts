import type { OxfmtConfig } from 'oxfmt'
import type { OxlintConfig } from 'oxlint'
import type { Options } from './configs'

export interface FormatOptions {
  /**
   * `tailwind` option
   * @default false
   * @options {
   *     entryPoint: 'src/global.css',
   * }
   */
  tailwind?: boolean | {
    /**
     * Path to your Tailwind CSS stylesheet, relative to the configuration file
     */
    entryPoint?: string
    /**
     * List of custom function names whose arguments should be sorted
     * @default ['clsx', 'cva', 'cn', 'tw']
     */
    functions?: string[]
  } | undefined
}

declare function lint(options: Options, config?: OxlintConfig): OxlintConfig

declare function format(options?: FormatOptions, config?: OxfmtConfig): OxfmtConfig

export { format, lint }
export { type Options } from './configs'
