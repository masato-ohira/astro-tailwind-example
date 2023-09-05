import pkg from '@@/package.json'

export const setLink = (href: string) => {
  return `/${pkg.config.base}${href}`
}
