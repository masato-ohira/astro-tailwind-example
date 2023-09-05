import { ceil } from 'lodash-es'

export const pxVw = (size: number) => {
  let rate = 100 / 1920
  return `${ceil(rate * size, 4)}vw`
}

export const spVw = (size: number) => {
  let rate = 100 / 375
  return `${ceil(rate * size, 4)}vw`
}
