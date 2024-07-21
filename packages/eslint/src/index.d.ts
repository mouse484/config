import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

declare function mouse(
  options: OptionsConfig & TypedFlatConfigItem,
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): Promise<TypedFlatConfigItem>

export { mouse }
