import type { OxlintConfig } from 'oxlint'
import type { Options } from '../configs'

interface EnableContext<TOptions = Options> {
  isPackageExists: (name: string) => boolean
  options: TOptions
}

type Enable = boolean | ((context: EnableContext) => boolean)

type ConfigItem<TOptions> = OxlintConfig | undefined | ((context: EnableContext<TOptions>) => OxlintConfig | undefined)

declare function createConfigs<
  TName extends string,
  TOptions extends Record<string, unknown> | undefined = undefined,
>(
  parameters: {
    name: TName
    enable?: Enable
    options?: TOptions
    configs: ConfigItem<TOptions>[]
  }): {
  name: TName
  enable?: Enable
  options?: TOptions
  build: (context: EnableContext, options?: TOptions) => OxlintConfig[]
}

export { createConfigs }
export type { ConfigItem, Enable, EnableContext }
