export default {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    '@stylistic/stylelint-config',
    'stylelint-config-clean-order',
  ],
  rules: {
    '@stylistic/string-quotes': 'single',
  },
}
