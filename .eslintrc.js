module.exports = {
  "extends": [
    "@gravity-ui/eslint-config",
    "@gravity-ui/eslint-config/prettier"
  ],
  "root": true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'max-len': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'
        ]
      }
    ],
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
  },
}