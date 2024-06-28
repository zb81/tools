import eslint from '@antfu/eslint-config'

export default eslint({
  react: true,
  rules: {
    'eqeqeq': 'off',
    'prefer-arrow-callback': 'off',
    'react/prefer-shorthand-boolean': 'off',
    'react/no-array-index-key': 'off',
    'react-refresh/only-export-components': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off',
  },
})
