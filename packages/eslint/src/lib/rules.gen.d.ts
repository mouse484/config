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
   * Enforce consistent syntax for css variables.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variable-syntax.md
   */
  'tailwind/enforce-consistent-variable-syntax'?: Linter.RuleEntry<TailwindEnforceConsistentVariableSyntax>
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/multiline.md
   */
  'tailwind/multiline'?: Linter.RuleEntry<TailwindMultiline>
  /**
   * Disallow classes that produce conflicting styles.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-conflicting-classes.md
   */
  'tailwind/no-conflicting-classes'?: Linter.RuleEntry<TailwindNoConflictingClasses>
  /**
   * Disallow duplicate class names in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-duplicate-classes.md
   */
  'tailwind/no-duplicate-classes'?: Linter.RuleEntry<TailwindNoDuplicateClasses>
  /**
   * Disallow restricted classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-restricted-classes.md
   */
  'tailwind/no-restricted-classes'?: Linter.RuleEntry<TailwindNoRestrictedClasses>
  /**
   * Disallow unnecessary whitespace in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unnecessary-whitespace.md
   */
  'tailwind/no-unnecessary-whitespace'?: Linter.RuleEntry<TailwindNoUnnecessaryWhitespace>
  /**
   * Disallow any css classes that are not registered in tailwindcss.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unregistered-classes.md
   */
  'tailwind/no-unregistered-classes'?: Linter.RuleEntry<TailwindNoUnregisteredClasses>
  /**
   * Enforce a consistent order for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/sort-classes.md
   */
  'tailwind/sort-classes'?: Linter.RuleEntry<TailwindSortClasses>
}

/* ======= Declarations ======= */
// ----- tailwind/enforce-consistent-variable-syntax -----
type TailwindEnforceConsistentVariableSyntax = []|[{
  
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
  
  syntax?: ("arbitrary" | "parentheses")
}]
// ----- tailwind/multiline -----
type TailwindMultiline = []|[{
  
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
// ----- tailwind/no-conflicting-classes -----
type TailwindNoConflictingClasses = []|[{
  
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
  
  tailwindConfig?: string
}]
// ----- tailwind/no-duplicate-classes -----
type TailwindNoDuplicateClasses = []|[{
  
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
// ----- tailwind/no-restricted-classes -----
type TailwindNoRestrictedClasses = []|[{
  
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
  restrict?: string[]
}]
// ----- tailwind/no-unnecessary-whitespace -----
type TailwindNoUnnecessaryWhitespace = []|[{
  
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
// ----- tailwind/no-unregistered-classes -----
type TailwindNoUnregisteredClasses = []|[{
  
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
  
  tailwindConfig?: string
  
  ignore?: string[]
}]
// ----- tailwind/sort-classes -----
type TailwindSortClasses = []|[{
  
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
  
  tailwindConfig?: string
  
  order?: ("asc" | "desc" | "official" | "improved")
}]