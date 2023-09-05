// import { times, mapKeys } from 'lodash-es'
import { pxVw, spVw } from '../mixins/vw'

export const spaces = {
  'vw-sm': pxVw(90),
  'vw-md': pxVw(180),
  'vw-lg': pxVw(220),
  'vw-xl': pxVw(240),
  'vw-2xl': pxVw(320),

  'sw-sm': spVw(30),
  'sw-md': spVw(50),
  'sw-lg': spVw(70),
  'sw-xl': spVw(80),
  'sw-2xl': spVw(90),
}
