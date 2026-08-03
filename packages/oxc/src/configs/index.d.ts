export declare function buildConfigs(options: Options): OxlintConfig[]

interface Options {
  eslint?: boolean
  opinionated?: boolean
  oxc?: boolean
  perfectionist?: boolean
  stylistic?: boolean
  tailwind?: boolean | { entryPoint: string } | undefined
  tanstackRouter?: boolean
  typeAware?: boolean
  typescript?: boolean
}
