import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'
import { createConfigs } from '../lib/factory.js'

const BOOLEAN_NAME_PATTERN = '^(is|has).+'

export default createConfigs({
  name: 'perfectionist',
  configs: [
    {
      name: 'jsx',
      files: [GLOB_JSX, GLOB_TSX],
      rules: {
        'perfectionist/sort-jsx-props': [
          'error',
          {
            type: 'natural',
            groups: [
              'primary',
              'accsessibility',
              'data-attributes',
              'style',
              'unknown',
              'predicate',
              'callback',
            ],
            customGroups: [
              {
                groupName: 'primary',
                elementNamePattern: '^(key|ref|id)$',
              },
              {
                groupName: 'accsessibility',
                elementNamePattern: '^(aria|role)-.+',
              },
              {
                groupName: 'data-attributes',
                elementNamePattern: '^data-.+',
              },
              {
                groupName: 'style',
                elementNamePattern: '^(style|className)$',
              },
              {
                groupName: 'predicate',
                anyOf: [
                  { elementNamePattern: '^.+ed$' }, // e.g. disabled, checked, selected
                  { elementNamePattern: BOOLEAN_NAME_PATTERN },
                  { elementValuePattern: '^(true|false)$' },
                  { elementValuePattern: '^\!.+' }, // e.g. !important, !isActive
                  { elementValuePattern: '.+===?.+' }, // e.g. status === "active"
                  { elementValuePattern: BOOLEAN_NAME_PATTERN },
                ],
              },
              {
                groupName: 'callback',
                elementNamePattern: '^on.+',
              },
            ],
          },
        ],
      },
    },
  ],
})
