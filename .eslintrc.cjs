module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/require-default-props': 0,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'max-classes-per-file': ['error', 2],
        'react/no-array-index-key': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/control-has-associated-label': ['warn'],
        'import/no-extraneous-dependencies': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/interactive-supports-focus': ['warn'],
        '@typescript-eslint/no-unused-expressions': ['warn'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-return-assign': ['warn'],
        'no-param-reassign': ['warn'],
        'no-nested-ternary': ['warn'],
        'max-len': [
          'error',
          {
            code: 180,
          },
        ],
      },
    },
  ],
};
