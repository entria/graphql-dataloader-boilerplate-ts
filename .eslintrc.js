module.exports = {
  extends: ['airbnb/base', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'react/prop-types': 0,
    'no-mixed-operators': 0,
    'global-require': 0,
    'no-console': 2,
    'max-len': [1, 120, 2],
    'no-param-reassign': [2, { props: false }],
    'no-continue': 0,
    'no-underscore-dangle': 0,
    'generator-star-spacing': 0,
    'no-duplicate-imports': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'spaced-comment': 0,
    'arrow-parens': 0,
    'import/first': 1,
    'no-return-await': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'import/namespace': [2, { allowComputed: true }],
    'import/no-duplicates': 1,
    'import/order': [2, { 'newlines-between': 'always-and-inside-groups' }],
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-await-in-loop': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'no-restricted-syntax': 0,
    'no-bitwise': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'import/no-cycle': 1,
    'import/no-self-import': 1,
    'import/extensions': [0, 'never', { ts: 'never' }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: 'typescript-eslint-parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: [
        'typescript',
        'react',
        'import',
      ],
    },
    {
      files: ['*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  plugins: ['import'],
  globals: {
    require: true,
  },
  env: {
    jest: true,
    node: true,
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};
