import type { OxlintConfig } from 'oxlint'
import type { Options } from '../configs'

interface EnableContext {
  isPackageExists: (name: string) => boolean
  options: Options
}

type Enable = boolean | ((context: EnableContext) => boolean)

type ConfigItem = OxlintConfig | ((context: EnableContext) => OxlintConfig | undefined)

declare function createConfigs<
  TName extends string,
  TOptions extends Record<string, unknown> | undefined = undefined,
>(
  parameters: {
    name: TName
    enable?: Enable
    options?: TOptions
    configs: ConfigItem[] | ((options: TOptions) => ConfigItem[])
  }): {
  name: TName
  enable?: Enable
  options?: TOptions
  build: (context: EnableContext, options?: TOptions) => OxlintConfig[]
}

export { createConfigs }
export type { ConfigItem, Enable, EnableContext }
