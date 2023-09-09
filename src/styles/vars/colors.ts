import { colord } from 'colord'

export const createColors = (
  name: string,
  hex: string,
): Record<string, string> => {
  return {
    [`${name}-50`]: colord(hex).lighten(0.25).toHex(),
    [`${name}-100`]: colord(hex).lighten(0.2).toHex(),
    [`${name}-200`]: colord(hex).lighten(0.15).toHex(),
    [`${name}-300`]: colord(hex).lighten(0.1).toHex(),
    [`${name}-400`]: colord(hex).lighten(0.05).toHex(),
    [`${name}-500`]: colord(hex).toHex(),
    [`${name}-600`]: colord(hex).darken(0.05).toHex(),
    [`${name}-700`]: colord(hex).darken(0.1).toHex(),
    [`${name}-800`]: colord(hex).darken(0.15).toHex(),
    [`${name}-900`]: colord(hex).darken(0.2).toHex(),
  }
}

export const colors = {
  ...createColors('brand', '#329795'),
}
