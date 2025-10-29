/// <reference types="./rules.gen.d.ts" />

import type antfu from '@antfu/eslint-config'

type AntfuParameters = Parameters<typeof antfu>
type AntfuOptions = AntfuParameters['0']
type AntfuUserConfigs = AntfuParameters['1'][]

export type Options = AntfuOptions & {
  tailwind?: boolean | { entryPoint?: string }
}

export declare function mouse(
  options?: Options,
  ...configs: AntfuUserConfigs
): ReturnType<typeof antfu>
export default mouse
