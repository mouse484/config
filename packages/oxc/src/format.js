const DEFAULT_FORMAT = /** @type {import('oxfmt').OxfmtConfig} */ ({
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
})

const DEFAULT_TAILWIND_FUNCTIONS = ['clsx', 'cva', 'cn', 'tw']
/**
@type {{ entryPoint?: string, functions?: string[] }}
 */
const DEFAULT_TAILWIND_OPTION = {}

/**
@param {import('.').FormatOptions} options
 */
function buildTailwindFormat({ tailwind }) {
  if (tailwind === undefined || tailwind === false) {
    return {}
  }

  const { entryPoint, functions = DEFAULT_TAILWIND_FUNCTIONS } = tailwind === true ? DEFAULT_TAILWIND_OPTION : tailwind
  return {
    sortTailwindcss: {
      ...(entryPoint !== undefined && { stylesheet: entryPoint }),
      functions,
    },
  }
}

/**
 * Create an `oxfmt` config with the defaults of this config.
 * Formatting rules are not provided by `lint()`, so use this for your formatting.
 * @param {import('.').FormatOptions} [options]
 * @param {import('oxfmt').OxfmtConfig} [config]
 */
export function format(options = {}, config = {}) {
  return {
    ...DEFAULT_FORMAT,
    ...buildTailwindFormat(options),
    ...config,
  }
}
