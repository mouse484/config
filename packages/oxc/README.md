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

Formatting rules are not provided by `lint()`, they are left to `format()`.

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
    // oxfmt config
    }
  ),
})
```

## Features
See [configs](https://github.com/mouse484/config/tree/main/packages/oxc/src/configs) for all available presets and options.