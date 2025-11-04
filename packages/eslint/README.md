# @mouse_484/eslint-config

ESLint Config based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Requirements
- ESLint: v9 or higher (Flat Config supported)

## Usage
Run the setup command:
```
npx @mouse_484/eslint-config@latest
```

## Features

- More flexible adjustments for opinionated rules than [`lessOpinionated`](https://github.com/antfu/eslint-config?tab=readme-ov-file#top-level-function-style-etc).
  - Disables `antfu/no-top-level-await` and `antfu/if-newline`.
- Includes additional configurations by default:
  - Recommended rules from [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn).
  - Rules from [stylistic](https://eslint.style/).
- Customized rules:
  - Stylistic rules adjustments.
  - JSX properties sort order.
  - File naming convention rules.
- Additional plugins:
  - [`eslint-plugin-better-tailwindcss`](https://github.com/schoero/eslint-plugin-better-tailwindcss) for Tailwind CSS.

## Advanced Configuration

#### TypeScript

for type-aware linting

```js
export default mouse({
  typescript: {
    tsconfigPath: './tsconfig.json',
  }
})
```

#### Tailwind CSS

```js
export default mouse({
  tailwind: {
    entryPoint: './src/index.css',
  },
})
