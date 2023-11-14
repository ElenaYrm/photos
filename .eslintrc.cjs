module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf"
      }
    ],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-console": "warn",
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "max-len": ["error", {
      "code":  120,
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true,
      'ignoreStrings': true
    }],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "no-var": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
}
