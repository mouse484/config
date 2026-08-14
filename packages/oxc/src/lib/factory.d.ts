import type { OxlintConfig } from 'oxlint'

declare function createConfigs<
  TName extends string,
  TOptions extends Record<string, unknown> | undefined = undefined,
>(
  parameters: {
    name: TName
    defaultEnabled: boolean
    options?: TOptions
    configs: OxlintConfig[] | ((options: TOptions) => OxlintConfig[])
  }): {
  name: TName
  defaultEnabled: boolean
  options?: TOptions
  build: (options?: TOptions) => OxlintConfig[]
}

export { createConfigs }
