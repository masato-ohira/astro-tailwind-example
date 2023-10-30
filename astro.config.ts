import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { config } from './package.json'
import { dataIsPlugin } from './my-scripts/vite/data-is-plugin'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: `/${config.base}`,
  server: { port: 3000 },
})
