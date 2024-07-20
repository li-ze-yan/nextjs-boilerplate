module.exports = {
  // 指定 ESLint 的解析器和解析器选项
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 定义代码的环境。指示哪些全局变量是预定义的
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 指示 ESLint 应停止在父目录中查找配置文件
  root: true,
  // 扩展其他文件或插件的配置
  // 扩展了 Next.js ESLint 推荐规则 Prettier TypeScript React 和 React Hooks 的配置
  extends: [
    'next',
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  // ESLint 插件
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  // 指定ESLint规则及其配置
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
