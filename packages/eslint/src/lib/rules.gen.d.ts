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
   * Enforce canonical class names.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-canonical-classes.md
   */
  'better-tailwindcss/enforce-canonical-classes'?: Linter.RuleEntry<BetterTailwindcssEnforceCanonicalClasses>
  /**
   * Enforce a consistent order for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-class-order.md
   */
  'better-tailwindcss/enforce-consistent-class-order'?: Linter.RuleEntry<BetterTailwindcssEnforceConsistentClassOrder>
  /**
   * Enforce consistent important position for classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-important-position.md
   */
  'better-tailwindcss/enforce-consistent-important-position'?: Linter.RuleEntry<BetterTailwindcssEnforceConsistentImportantPosition>
  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-line-wrapping.md
   */
  'better-tailwindcss/enforce-consistent-line-wrapping'?: Linter.RuleEntry<BetterTailwindcssEnforceConsistentLineWrapping>
  /**
   * Enforce consistent syntax for css variables.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variable-syntax.md
   */
  'better-tailwindcss/enforce-consistent-variable-syntax'?: Linter.RuleEntry<BetterTailwindcssEnforceConsistentVariableSyntax>
  /**
   * Enforce shorthand class names instead of longhand class names.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-shorthand-classes.md
   */
  'better-tailwindcss/enforce-shorthand-classes'?: Linter.RuleEntry<BetterTailwindcssEnforceShorthandClasses>
  /**
   * Disallow classes that produce conflicting styles.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-conflicting-classes.md
   */
  'better-tailwindcss/no-conflicting-classes'?: Linter.RuleEntry<BetterTailwindcssNoConflictingClasses>
  /**
   * Disallow the use of deprecated Tailwind CSS classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-deprecated-classes.md
   */
  'better-tailwindcss/no-deprecated-classes'?: Linter.RuleEntry<BetterTailwindcssNoDeprecatedClasses>
  /**
   * Disallow duplicate class names in tailwind classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-duplicate-classes.md
   */
  'better-tailwindcss/no-duplicate-classes'?: Linter.RuleEntry<BetterTailwindcssNoDuplicateClasses>
  /**
   * Disallow restricted classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-restricted-classes.md
   */
  'better-tailwindcss/no-restricted-classes'?: Linter.RuleEntry<BetterTailwindcssNoRestrictedClasses>
  /**
   * Disallow any css classes that are not registered in tailwindcss.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unknown-classes.md
   */
  'better-tailwindcss/no-unknown-classes'?: Linter.RuleEntry<BetterTailwindcssNoUnknownClasses>
  /**
   * Disallow unnecessary whitespace between Tailwind CSS classes.
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unnecessary-whitespace.md
   */
  'better-tailwindcss/no-unnecessary-whitespace'?: Linter.RuleEntry<BetterTailwindcssNoUnnecessaryWhitespace>
}

/* ======= Declarations ======= */
// ----- better-tailwindcss/enforce-canonical-classes -----
type BetterTailwindcssEnforceCanonicalClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  collapse?: boolean
  
  logical?: boolean
}]
// ----- better-tailwindcss/enforce-consistent-class-order -----
type BetterTailwindcssEnforceConsistentClassOrder = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  componentClassOrder?: ("asc" | "desc" | "preserve")
  
  componentClassPosition?: ("start" | "end")
  
  order?: ("asc" | "desc" | "official" | "strict")
  
  unknownClassOrder?: ("asc" | "desc" | "preserve")
  
  unknownClassPosition?: ("start" | "end")
}]
// ----- better-tailwindcss/enforce-consistent-important-position -----
type BetterTailwindcssEnforceConsistentImportantPosition = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  position?: ("legacy" | "recommended")
}]
// ----- better-tailwindcss/enforce-consistent-line-wrapping -----
type BetterTailwindcssEnforceConsistentLineWrapping = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  classesPerLine?: number
  
  group?: ("newLine" | "emptyLine" | "never")
  
  indent?: ("tab" | number)
  
  lineBreakStyle?: ("unix" | "windows")
  
  preferSingleLine?: boolean
  
  printWidth?: number
  
  strictness?: ("strict" | "loose")
}]
// ----- better-tailwindcss/enforce-consistent-variable-syntax -----
type BetterTailwindcssEnforceConsistentVariableSyntax = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  syntax?: ("shorthand" | "variable")
}]
// ----- better-tailwindcss/enforce-shorthand-classes -----
type BetterTailwindcssEnforceShorthandClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
}]
// ----- better-tailwindcss/no-conflicting-classes -----
type BetterTailwindcssNoConflictingClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
}]
// ----- better-tailwindcss/no-deprecated-classes -----
type BetterTailwindcssNoDeprecatedClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
}]
// ----- better-tailwindcss/no-duplicate-classes -----
type BetterTailwindcssNoDuplicateClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
}]
// ----- better-tailwindcss/no-restricted-classes -----
type BetterTailwindcssNoRestrictedClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  restrict?: ({
    
    fix?: string
    
    message?: string
    
    pattern: string
  } | string)[]
}]
// ----- better-tailwindcss/no-unknown-classes -----
type BetterTailwindcssNoUnknownClasses = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  ignore?: string[]
}]
// ----- better-tailwindcss/no-unnecessary-whitespace -----
type BetterTailwindcssNoUnnecessaryWhitespace = []|[{
  
  selectors?: ({
    
    kind: "attribute"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | ({
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
    
    path?: string
  } | {
    
    callTarget?: ("all" | "first" | "last" | number)
    
    kind: "callee"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name?: string
    
    path: string
  }) | {
    
    kind: "tag"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  } | {
    
    kind: "variable"
    
    match?: ({
      
      type: "strings"
    } | {
      
      path?: string
      
      type: "objectKeys"
    } | {
      
      path?: string
      
      type: "objectValues"
    })[]
    
    name: string
  })[]
  
  callees?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  attributes?: (string | [string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]])[]
  
  variables?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  tags?: ([string, ({
    
    match: "strings"
  } | {
    
    match: "objectKeys"
    
    pathPattern?: string
  } | {
    
    match: "objectValues"
    
    pathPattern?: string
  })[]] | string)[]
  
  entryPoint?: string
  
  messageStyle?: ("visual" | "compact" | "raw")
  
  tailwindConfig?: string
  
  tsconfig?: string
  
  detectComponentClasses?: boolean
  
  rootFontSize?: number
  
  allowMultiline?: boolean
}]