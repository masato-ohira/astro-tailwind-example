export const getName = (meta: any) => {
  const fileName = meta.url.split('/').pop()
  const [componentName] = fileName.split('.')

  return componentName
}
