# @mouse_484/oxc-config

Oxlint Config by me

## Requirements
- Oxlint: recomended latest (required `jsPlugin` support)
- Oxfmt: recomended latest (for formatting)

## Usage
Install the packages
```sh
npm install -D oxlint oxfmt @mouse_484/oxc-config
```

Create a `oxlint.config.ts` and add the following code:
```js
import { lint } from '@mouse_484/oxc-config'

export default lint(
  {
  // custom options
  },
  {
  // oxlint config
  }
)
```

Create a `oxfmt.config.ts` and add the following code:
```js
import { format } from '@mouse_484/oxc-config'

export default format(
  {
  // oxfmt config
  }
)
```

## Formatting
Formatting rules (indent, quotes, semicolons, spacing, ...) are **not** provided by `lint()`.
They are left to `oxfmt` (`format()`), so `oxlint --fix` and `oxfmt` never fight each other.

`format()` only sets the defaults of this config:

| Option | Default |
| --- | --- |
| `printWidth` | `120` |
| `semi` | `false` |
| `singleQuote` | `true` |
| `tabWidth` | `2` |
| `trailingComma` | `'all'` |

Sorting is intentionally **not** enabled by default:
- `sortPackageJson` is already enabled in `oxfmt` by default
- `sortImports` is disabled, because the `import` preset of `lint()` already sorts imports with
  `eslint-plugin-perfectionist`, and `oxfmt` only covers import statements
  (it does not sort named specifiers, exports, objects, types, JSX props, etc.)
- `sortTailwindcss` is disabled in `oxfmt` by default. Enable it yourself if you need it

## Features
See [configs](https://github.com/mouse484/config/tree/main/packages/oxc/src/configs) for all available presets and options.
