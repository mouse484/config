/** @type {import('prettier').Config} */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  // jsxBracketSameLine: "Deprecated",
  arrowParens: 'always',
  // range: 0,
  // parser: none,
  // filepath: none,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: "preserve", <- TBD
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  singleAttributePerLine: true,
}
