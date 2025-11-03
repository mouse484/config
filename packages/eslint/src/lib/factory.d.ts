import type { Options, TypedFlatConfigItem } from '..'

interface ConfigItem extends TypedFlatConfigItem {
  withOptions?: (keyof Options)[]
  name: string
}

type OnlyObject<T> = T extends object ? T : never
export declare function createConfigs<T extends keyof Options = undefined>(parameters: {
  name: string
  baseWithOption?: T
  configs: (
    ConfigItem
    | ((meta?: OnlyObject<Options[T]>) => ConfigItem)
  )[]
}): (options: Options) => TypedFlatConfigItem[]
