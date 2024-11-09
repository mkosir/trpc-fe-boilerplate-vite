import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  eslintPluginImport.flatConfigs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // Uncomment once released - https://github.com/facebook/react/pull/30774
  // eslintPluginReactHooks.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintConfigPrettier,
  {
    ignores: [
      '!.*',
      'node_modules',
      'dist',
      'compiled',
      'build',
      'routeTree.gen.ts',
      'src/common/trpc-api-boilerplate/api-types',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.name,
      },
    },
    settings: {
      'import/resolver': {
        typescript: { project: 'tsconfig.app.json' },
      },
      react: { version: 'detect' },
    },
  },
  {
    files: ['**/*.{js,ts,tsx}'],

    plugins: {
      // Remove once released - https://github.com/facebook/react/pull/30774
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': eslintPluginReactHooks,
    },

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // Remove once released - https://github.com/facebook/react/pull/30774
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...eslintPluginReactHooks.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true }],

      'prefer-template': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',

      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          // Generic type parameter must start with letter T, followed by any uppercase letter.
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: { regex: '^T[A-Z]', match: true },
        },
      ],

      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
