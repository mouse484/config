/// <reference types="./rules.gen.d.ts" />

import type antfu from '@antfu/eslint-config'
import type { TypedFlatConfigItem } from '@antfu/eslint-config'

type AntfuParameters = Parameters<typeof antfu>
type AntfuOptions = AntfuParameters['0']
type AntfuUserConfigs = AntfuParameters['1'][]

export type Options = AntfuOptions & {
  tailwind?: boolean | { entryPoint?: string }
}

export declare function mouse(
  options: Options,
  ...configs: AntfuUserConfigs
): ReturnType<typeof antfu>
export default mouse

// factoty
type ConfigItem = TypedFlatConfigItem & { withOptions?: (keyof Options)[], name: string }
type OnlyObject<T> = T extends object ? T : never
export declare function createConfigs<T extends keyof Options = undefined>(parameters: {
  name: string
  baseWithOption?: T
  configs: (ConfigItem | ((meta?: OnlyObject<Options[T]>) => ConfigItem))[]
}): (options: Options) => TypedFlatConfigItem[]
