export type ArticleType = {
  id: string
  title: string
  content: string
}

export const mdToJson = (md: string): ArticleType[] => {
  const lines = md.split('\n')
  const data: ArticleType[] = []
  let currentItem: ArticleType | null = null
  let n = 0
  for (const line of lines) {
    if (line.startsWith('#')) {
      n++
      const title = line
      currentItem = { id: `${n}`, title, content: '' }
      data.push(currentItem)
    } else if (currentItem) {
      currentItem.content += line + '\n'
    }
  }

  return data.map((i) => {
    return {
      ...i,
      title: i.title.split('# ')[1],
    }
  })
}

export const mdToObj = (md: string): Record<string, string> => {
  const keyBy = (array: any[], key: string) => {
    return array.reduce((result, item) => {
      result[item[key]] = item.content.trim()
      return result
    }, {})
  }

  const array = mdToJson(md)
  return keyBy(array, 'title')
}
