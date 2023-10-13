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
    extend: {
      fontFamily: {
        body: ['Roboto', 'Noto Sans JP', 'sans-serif'],
        display: ['Oswald', 'Noto Sans JP', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#60bb46',
          secondary: '#2c5c9a',
          accent: '#805AD5',
          neutral: '#333',
          'base-100': '#FFFFFF',
          info: '#00b5d8',
          success: '#38A169',
          warning: '#eda629',
          error: '#ea2b00',
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
        ...(twClasses() as CSSRuleObject),
      })
    }),
  ],
} satisfies Config
