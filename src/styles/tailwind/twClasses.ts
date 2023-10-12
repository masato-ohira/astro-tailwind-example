import fs from 'fs-extra'
import { zipObject } from 'lodash'
const tailwindDir = `src/styles/tailwind`

// 使用しているCustomClass一覧を取得
export const twClasses = () => {
  const components = fs.readFileSync(`${tailwindDir}/components.scss`, 'utf-8')
  const utils = fs.readFileSync(`${tailwindDir}/utilities.scss`, 'utf-8')
  const regex = /\.([a-zA-Z0-9_-]+)/g
  const classNames = []

  let match
  while ((match = regex.exec(`${components + utils}`)) !== null) {
    classNames.push(match[1])
  }

  const keys = classNames.map((i) => `.${i}`)
  const values = classNames.map((i) => {
    return {}
  })
  return zipObject(keys, values)
}
