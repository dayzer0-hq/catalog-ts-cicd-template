// ESLint flat config. `npm run lint` currently FAILS on this repository:
// src/reports.service.ts carries seeded violations a brief has you clean up.
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', 'eslint.config.mjs', 'jest.config.js'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
);
