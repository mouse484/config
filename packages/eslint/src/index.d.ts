import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

declare function mouse(
  options: OptionsConfig & TypedFlatConfigItem,
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): Promise<TypedFlatConfigItem>

export default mouse
export { mouse }
export * from '@antfu/eslint-config'
