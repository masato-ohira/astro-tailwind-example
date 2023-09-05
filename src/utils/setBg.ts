import pkg from '@@/package.json'
import type { CSSProperties } from 'react'

export const setBg = (url: string): CSSProperties => {
  return {
    backgroundImage: `url('/${pkg.config.base}${url}')`,
  }
}
