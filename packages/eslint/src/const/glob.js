import { GLOB_ASTRO } from '@antfu/eslint-config'

export const GLOB_SVELTE_COMPONENTS = '**/*.svelte'

export const GLOB_SVELTE_ROUTES = '**/src/routes/**/\+*.svelte'

export const GLOB_README = '**/README.md'

/**
 * Code block in markdown
 * @see https://github.com/eslint/markdown/blob/32d8cbd8b6d2d121225b5291c2f9a0ea6c2ccd00/docs/processors/markdown.md?plain=1#L96
 */
export const GLOB_MARKDOWN_CODE_BLOCK = '**/*.md/**'

export const GLOB_D_TS = '**/*.d.ts'

export const GLOB_ASTRO_SCRIPT_TAG = `${GLOB_ASTRO}/*`
