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
  // custom options
  },
  {
  // oxfmt config
  }
)
```

### With Vite+
If you use [Vite+](https://viteplus.dev/config), put the same configs in the `lint` and `fmt` blocks of `vite.config.ts`:
```js
import { format, lint } from '@mouse_484/oxc-config'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: lint(
    {
    // custom options
    },
    {
    // oxlint config
    }
  ),
  fmt: format(
    {
    // custom options
    },
    {
    // oxfmt config
    }
  ),
})
```

## Options
### lint()
See [configs](https://github.com/mouse484/config/tree/main/packages/oxc/src/configs) for all available presets and options.

### format()

| Option | Default | Description |
| --- | --- | --- |
| `tailwind` | `false` | Sort Tailwind CSS classes. See [Tailwind](#tailwind) |

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

### Tailwind
Enable the `tailwind` option to sort Tailwind CSS classes with `oxfmt`:
```js
import { format } from '@mouse_484/oxc-config'

export default format({
  tailwind: {
    // path to your Tailwind CSS stylesheet, `oxfmt` finds it automatically if omitted
    entryPoint: 'src/global.css',
    // default: ['clsx', 'cva', 'cn', 'tw']
    functions: ['clsx', 'cn'],
  },
})
```

`tailwind: true` enables the sorting with the defaults above.

> [!NOTE]
> `oxfmt` only sorts classes, it does not check them. If you also need to report unknown classes,
> keep `eslint-plugin-better-tailwindcss` in your `oxlint` config by yourself.

## Features
See [configs](https://github.com/mouse484/config/tree/main/packages/oxc/src/configs) for all available presets and options.
