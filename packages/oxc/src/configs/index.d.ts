import type { OxlintConfig } from 'oxlint'

export default function buildConfigs(options: Options): OxlintConfig[]

export interface Options {
  /**
   * `eslint` option
   * @default true
   */
  eslint?: boolean
  /**
   * `opinionated` option
   * @default true
   */
  opinionated?: boolean
  /**
   * `oxc` option
   * @default true
   */
  oxc?: boolean
  /**
   * `import` option
   * @default true
   */
  import?: boolean
  /**
   * `stylistic` option
   * @default true
   */
  stylistic?: boolean
  /**
   * `tailwind` option
   * @default false
   * @options {
   *     entryPoint: 'src/global.css',
   *   }
   */
  tailwind?: boolean | { entryPoint: string } | undefined
  /**
   * `tanstack` option
   * @default false
   */
  tanstack?: boolean
  /**
   * `typescript` option
   * @default true
   * @options {
   *     typeAware: true,
   *   }
   */
  typescript?: boolean | { typeAware: boolean } | undefined
  /**
   * `react` option
   * @default true
   */
  react?: boolean
  /**
   * `vitest` option
   * @default false
   */
  vitest?: boolean
  /**
   * `node` option
   * @default false
   */
  node?: boolean
  /**
   * `javascript` option
   * @default true
   */
  javascript?: boolean
  /**
   * `unicorn` option
   * @default true
   */
  unicorn?: boolean
}
