/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-readable-tailwind/blob/main/docs/rules/multiline.md
   */
  'readable-tailwind/multiline'?: Linter.RuleEntry<ReadableTailwindMultiline>
  /**
   * Disallow duplicate class names in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-readable-tailwind/blob/main/docs/rules/no-duplicate-classes.md
   */
  'readable-tailwind/no-duplicate-classes'?: Linter.RuleEntry<ReadableTailwindNoDuplicateClasses>
  /**
   * Disallow unnecessary whitespace in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-readable-tailwind/blob/main/docs/rules/no-unnecessary-whitespace.md
   */
  'readable-tailwind/no-unnecessary-whitespace'?: Linter.RuleEntry<ReadableTailwindNoUnnecessaryWhitespace>
  /**
   * Enforce a consistent order for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-readable-tailwind/blob/main/docs/rules/sort-classes.md
   */
  'readable-tailwind/sort-classes'?: Linter.RuleEntry<ReadableTailwindSortClasses>
}

/* ======= Declarations ======= */
// ----- readable-tailwind/multiline -----
type ReadableTailwindMultiline = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  classesPerLine?: number
  
  group?: ("emptyLine" | "never" | "newLine")
  
  indent?: ("tab" | number)
  
  lineBreakStyle?: ("unix" | "windows")
  
  preferSingleLine?: boolean
  
  printWidth?: number
}]
// ----- readable-tailwind/no-duplicate-classes -----
type ReadableTailwindNoDuplicateClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
}]
// ----- readable-tailwind/no-unnecessary-whitespace -----
type ReadableTailwindNoUnnecessaryWhitespace = []|[{
  
  allowMultiline?: boolean
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
}]
// ----- readable-tailwind/sort-classes -----
type ReadableTailwindSortClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
    [k: string]: unknown | undefined
  })[]] | string)[]
  
  entryPoint?: string
  
  order?: ("asc" | "desc" | "official" | "improved")
  
  tailwindConfig?: string
}]