export declare function buildConfigs(options: Options): OxlintConfig[]

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
   * `perfectionist` option
   * @default true
   */
  perfectionist?: boolean
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
   * `tanstackRouter` option
   * @default false
   */
  tanstackRouter?: boolean
  /**
   * `typeAware` option
   * @default true
   */
  typeAware?: boolean
  /**
   * `typescript` option
   * @default true
   */
  typescript?: boolean
  /**
   * `react` option
   * @default true
   */
  react?: boolean
  /**
   * `vitest` option
   * @default true
   */
  vitest?: boolean
  /**
   * `promise` option
   * @default true
   */
  promise?: boolean
  /**
   * `node` option
   * @default true
   */
  node?: boolean
  /**
   * `jsdoc` option
   * @default true
   */
  jsdoc?: boolean
  /**
   * `unicorn` option
   * @default true
   */
  unicorn?: boolean
}
