import { GLOB_TS } from '@antfu/eslint-config'
import { createConfigs } from '../lib/factory.js'

export default createConfigs({
  name: 'typescript',
  baseWithOption: 'typescript',
  configs: [
    (meta) => {
      if (meta && 'tsconfigPath' in meta && meta.tsconfigPath !== undefined) {
        return {
          name: 'type-aware',
          files: [GLOB_TS],
          rules: {
            'ts/no-deprecated': 'error',
          },
        }
      }
    },
  ],
})
