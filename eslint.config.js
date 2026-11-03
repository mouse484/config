import mouse from '@mouse_484/eslint-config'

export default mouse({
  typescript: {
    tsconfigPath: './jsconfig.json',
    allowJS: true,
  },
}, {
  rules: {
    // Configuration modules intentionally construct their exported values at load time.
    'unicorn/no-top-level-side-effects': 'off',
    // Conflicts with jsdoc/check-alignment's required asterisk prefixes.
    'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
  },
})
