/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
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
  plugins: [require('daisyui')],
}
