import type {
  TypedFlatConfigItem as AntfuTypedFlatConfigItem,
  OptionsConfig,
  OptionsOverrides,
  OptionsTypescript,
  OptionsTypeScriptErasableOnly,
  OptionsTypeScriptWithTypes,
  Rules,
} from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { RuleOptions } from './lib/rules.gen'

type Awaitable<T> = T | Promise<T>
export interface TypedFlatConfigItem extends Omit<AntfuTypedFlatConfigItem, 'rules'> {
  rules?: Rules & RuleOptions
}
type Config = Awaitable<
  TypedFlatConfigItem
  | TypedFlatConfigItem[]
  | FlatConfigComposer<any, any>
  | Linter.Config[]
>
export interface Options extends OptionsConfig, Omit<TypedFlatConfigItem, 'files'> {
  tailwind?: false | { entryPoint: string }
  typescript?: boolean
    | OptionsTypescript
    | (OptionsTypeScriptWithTypes & { allowJS?: boolean })
    & OptionsOverrides
    & OptionsTypeScriptErasableOnly
}

export declare function mouse(
  options?: Options,
  ...configs: Config[]
): ReturnType<typeof antfu>
export default mouse
