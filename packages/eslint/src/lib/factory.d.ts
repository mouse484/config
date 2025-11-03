import type { Rules, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Options } from '..'
import type { RuleOptions } from './rules.gen'

interface ConfigItem extends TypedFlatConfigItem {
  withOptions?: (keyof Options)[]
  name: string
  rules?: Rules & RuleOptions
}

type OnlyObject<T> = T extends object ? T : never
export declare function createConfigs<T extends keyof Options = undefined>(parameters: {
  name: string
  baseWithOption?: T
  configs: (ConfigItem | ((meta?: OnlyObject<Options[T]>) => ConfigItem))[]
}): (options: Options) => TypedFlatConfigItem[]
