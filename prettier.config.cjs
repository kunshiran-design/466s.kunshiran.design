/** @type { import('prettier').Options } */
const config = {
  singleQuote: true,
  semi: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
module.exports = config
