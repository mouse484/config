import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Options } from './type'

type ConfigItem = TypedFlatConfigItem & { withOptions?: (keyof Options)[], name: string }
type OnlyObject<T> = T extends object ? T : never
export declare function createConfigs<T extends keyof Options = undefined>(parameters: {
  name: string
  baseWithOption?: T
  configs: (ConfigItem | ((meta?: OnlyObject<Options[T]>) => ConfigItem))[]
}): (options: Options) => TypedFlatConfigItem[]
