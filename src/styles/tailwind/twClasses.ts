import type { CSSProperties } from 'react'
// import { pxVw, spVw } from '../mixins/vw'

export const twClasses: Record<string, CSSProperties> = {
  '.hstack': {},
  '.center': {},

  // ------------------------------
  '.vertical-lr': {
    writingMode: 'vertical-lr',
  },
  '.vertical-rl': {
    writingMode: 'vertical-rl',
  },

  // ------------------------------
  '.font-feature-jp': {
    fontFeatureSettings: `"palt" 1, "jp90"`,
  },
}
