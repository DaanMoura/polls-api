module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100
      }
    ],
    
  }
}