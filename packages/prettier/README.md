<h1 align="center">@mouse_484/prettier-config</h1>
<p align="center">
  <img
    alt="npm"
    src="https://img.shields.io/npm/v/@mouse_484/prettier-config"
  >
</p>

## Usage

#### install

`yarn add @mouse_484/prettier-config`

#### configure

##### A.

```json
// package.json
{
  "name": "name",
  ...
  "prettier": "@mouse_484/prettier-config"
}
```

###### B.

```js
// .prettierrc.js
module.exports = {
  ...require('@mouse_484/prettier-config'),
};
```
