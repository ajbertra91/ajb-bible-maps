import globals from 'globals';
import tseslint from 'typescript-eslint';
import litPlugin from 'eslint-plugin-lit';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['dist/**'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [tseslint.configs.recommended, litPlugin.configs['flat/recommended'], prettierRecommended],
    rules: {
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
);
