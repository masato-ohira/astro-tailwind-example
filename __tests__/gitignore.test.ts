import { readFileSync } from 'fs'
import { test, expect } from '@playwright/test'
import { includes, split } from 'lodash'

test('gitignoreで最低限の除外はできている', async () => {
  let gitIgnore: string | string[] = readFileSync('.gitignore', 'utf8')
  gitIgnore = split(gitIgnore, '\n')

  expect(includes(gitIgnore, '.htaccess')).toBe(true)
  expect(includes(gitIgnore, 'node_modules/')).toBe(true)
  expect(includes(gitIgnore, '.astro/')).toBe(true)
  expect(includes(gitIgnore, '.env')).toBe(true)
})
