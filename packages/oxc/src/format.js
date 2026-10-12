const DEFAULT_FORMAT = /** @type {import('oxfmt').OxfmtConfig} */ ({
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
})

/**
 * Create an `oxfmt` config with the defaults of this config.
 * Formatting rules are not provided by `lint()`, so use this for your formatting.
 * @param {import('oxfmt').OxfmtConfig} [config]
 */
export function format(config = {}) {
  return { ...DEFAULT_FORMAT, ...config }
}
