'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    curly: 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  overrides: [
    // TypeScript files
    {
      files: ['**/*.{cts,ts}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:typescript-sort-keys/recommended',
      ],
      rules: {
        'import/no-duplicates': 'error',
      },
    },
    // JavaScript files
    {
      files: ['**/*.{cjs,js}'],
      rules: {
        'import/no-duplicates': 'error',
      },
    },
    // Node files
    {
      files: [
        './bin/*.{js,ts}',
        './.eslintrc.{cjs,js}',
        './.prettierrc.{cjs,js}',
      ],
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
      rules: {
        'n/hashbang': 'off',
      },
    },
  ],
};
