import type antfu from '@antfu/eslint-config';
import type { TypedFlatConfigItem } from '@antfu/eslint-config';

type AntfuParameters = Parameters<typeof antfu>;
type AntfuOptions = AntfuParameters['0'];
type AntfuUserConfigs = AntfuParameters['1'][];

export type Options = AntfuOptions & {};

export declare function mouse(options: Options, ...configs: AntfuUserConfigs): ReturnType<typeof antfu>;


// factoty
export declare function createConfigs(parameters: {
  name: string
  baseWithOptions?: (keyof Options)[]
  configs: (TypedFlatConfigItem & {withOptions?: (keyof Options)[]})[]
}): (options: Options) => TypedFlatConfigItem[];
