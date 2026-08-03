# @mouse_484/oxc-config

Oxlint Config by me

## Requirements
- Oxlint: recomended latest (required `jsPlugin` support)

## Usage
Install the packages
```sh
npm install -D oxlint @mouse_484/oxc-config
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

## Features
See [configs](https://github.com/mouse484/config/tree/main/packages/oxc/src/configs) for all available presets and options.
