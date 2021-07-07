const importResolverExt = ['js', 'ts', 'tsx'];
const extSettings = importResolverExt.reduce((acc, ext) => {
  acc[ext] = 'never';
  return acc;
}, {});

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    camelcase: 'off',
    indent: 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      { offsetTernaryExpressions: true, SwitchCase: 1, CallExpression: { arguments: 'off' } },
    ],
    'no-param-reassign': ['error', { props: false }],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'func-names': 'off',
    'import/extensions': ['error', 'ignorePackages', extSettings],
    'import/no-unresolved': 'off',
    semi: 'error',
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'no-extra-parens': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
};
