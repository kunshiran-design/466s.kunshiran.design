/** @type { import('eslint').Linter.Config } */
const config = {
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:astro/recommended",
    'prettier'
  ],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
      },
    },
    {
      files: ["*.tsx", '*.ts'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
    }
  ],
}

module.exports = config