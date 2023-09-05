import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'
import { twClasses } from './src/styles/tailwind/twClasses'
import { colors } from './src/styles/vars/colors'
import type { CSSRuleObject } from 'tailwindcss/types/config'

export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      colors,
      fontFamily: {
        body: ['Roboto', 'Noto Sans JP', 'sans-serif'],
        display: ['Oswald', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-easing'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ...(twClasses as CSSRuleObject),
      })
    }),
  ],
} satisfies Config
