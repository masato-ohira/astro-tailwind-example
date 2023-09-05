module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'prettier',
  ],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  rules: {
    // 'no-console': 1,
    // 'no-debugger': 1,
    // 'no-multi-spaces': 0,
    // 'no-irregular-whitespace': 1,
    // 'max-len': 0,
    'no-unused-vars': 1,
    'import/no-unresolved': 0,
    'react/no-unknown-property': 0,
    'react/display-name': 1,
    '@next/next/no-img-element': 0,
    'react/jsx-key': 2,
    'react-hooks/exhaustive-deps': 0,
  },

  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      // rules: {
      // },
    },
  ],
}
