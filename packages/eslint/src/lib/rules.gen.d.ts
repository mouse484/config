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
   * Enforce a consistent order for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-class-order.md
   */
  'tailwind/enforce-consistent-class-order'?: Linter.RuleEntry<TailwindEnforceConsistentClassOrder>
  /**
   * Enforce consistent important position for classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-important-position.md
   */
  'tailwind/enforce-consistent-important-position'?: Linter.RuleEntry<TailwindEnforceConsistentImportantPosition>
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/multiline.md
   */
  'tailwind/enforce-consistent-line-wrapping'?: Linter.RuleEntry<TailwindEnforceConsistentLineWrapping>
  /**
   * Enforce consistent syntax for css variables.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variable-syntax.md
   */
  'tailwind/enforce-consistent-variable-syntax'?: Linter.RuleEntry<TailwindEnforceConsistentVariableSyntax>
  /**
   * Enforce shorthand class names instead of longhand class names.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-shorthand-classes.md
   */
  'tailwind/enforce-shorthand-classes'?: Linter.RuleEntry<TailwindEnforceShorthandClasses>
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/multiline.md
   * @deprecated
   */
  'tailwind/multiline'?: Linter.RuleEntry<TailwindMultiline>
  /**
   * Disallow classes that produce conflicting styles.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-conflicting-classes.md
   */
  'tailwind/no-conflicting-classes'?: Linter.RuleEntry<TailwindNoConflictingClasses>
  /**
   * Disallow the use of deprecated Tailwind CSS classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-deprecated-classes.md
   */
  'tailwind/no-deprecated-classes'?: Linter.RuleEntry<TailwindNoDeprecatedClasses>
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
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-class-order.md
   * @deprecated
   */
  'tailwind/sort-classes'?: Linter.RuleEntry<TailwindSortClasses>
}

/* ======= Declarations ======= */
// ----- tailwind/enforce-consistent-class-order -----
type TailwindEnforceConsistentClassOrder = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
  order?: ("asc" | "desc" | "official" | "improved")
}]
// ----- tailwind/enforce-consistent-important-position -----
type TailwindEnforceConsistentImportantPosition = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
  position?: ("legacy" | "recommended")
}]
// ----- tailwind/enforce-consistent-line-wrapping -----
type TailwindEnforceConsistentLineWrapping = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
  classesPerLine?: number
  
  group?: ("emptyLine" | "never" | "newLine")
  
  indent?: ("tab" | number)
  
  lineBreakStyle?: ("unix" | "windows")
  
  preferSingleLine?: boolean
  
  printWidth?: number
}]
// ----- tailwind/enforce-consistent-variable-syntax -----
type TailwindEnforceConsistentVariableSyntax = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  syntax?: ("arbitrary" | "parentheses" | "shorthand" | "variable")
}]
// ----- tailwind/enforce-shorthand-classes -----
type TailwindEnforceShorthandClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
}]
// ----- tailwind/multiline -----
type TailwindMultiline = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
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
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
}]
// ----- tailwind/no-deprecated-classes -----
type TailwindNoDeprecatedClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
}]
// ----- tailwind/no-duplicate-classes -----
type TailwindNoDuplicateClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
}]
// ----- tailwind/no-restricted-classes -----
type TailwindNoRestrictedClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  restrict?: ({
    
    fix?: string
    
    message?: string
    
    pattern: string
  } | string)[]
}]
// ----- tailwind/no-unnecessary-whitespace -----
type TailwindNoUnnecessaryWhitespace = []|[{
  
  allowMultiline?: boolean
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
}]
// ----- tailwind/no-unregistered-classes -----
type TailwindNoUnregisteredClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
  detectComponentClasses?: boolean
  
  ignore?: string[]
}]
// ----- tailwind/sort-classes -----
type TailwindSortClasses = []|[{
  
  callees?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | []|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([]|[string]|[string, string] | []|[string]|[string, ({
    
    match?: "strings"
  } | {
    
    match?: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match?: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  tailwindConfig?: string
  
  order?: ("asc" | "desc" | "official" | "improved")
}]