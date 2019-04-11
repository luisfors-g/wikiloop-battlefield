module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue'
  ],
  plugins: [
    // 'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    semi: 'off',
    indent: 'off',
    'no-console': 'off',
    'quotes': 'off',
    "space-before-function-paren": "off",
    "prefer-const": "off",
    "arrow-parens": "off",
    "require-await": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/v-bind-style": "off",
    "padded-blocks": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
  }
}