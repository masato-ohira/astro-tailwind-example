import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'
import { twClasses } from './src/styles/tailwind/twClasses'
import type { CSSRuleObject } from 'tailwindcss/types/config'

export default {
  darkMode: ['class'],
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  },
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#319795',
          secondary: '#2B6CB0',
          accent: '#805AD5',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#00b5d8',
          success: '#38A169',
          warning: '#ecc94b',
          error: '#e53e3e',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwindcss-easing'),
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ...(twClasses as CSSRuleObject),
      })
    }),
  ],
} satisfies Config
