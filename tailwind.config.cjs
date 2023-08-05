const DEFAULT_SPACING = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  72: '72px',
  80: '80px',
  88: '88px',
  96: '96px',
  104: '104px',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    spacing: DEFAULT_SPACING,
    gap: DEFAULT_SPACING,
    borderSpacing: DEFAULT_SPACING,
    borderWidth: DEFAULT_SPACING,
    extend: {
      colors: {
        primary: '#ff8000',
        black: '#000',
        white: '#fff',
      },
      screens: {
        mobile: { max: '1024px' },
        desktop: '1025px',
      },
    },
  },
  plugins: [],
}

// mobile: {
//   raw: 'screen  and (hover: none) and (pointer: coarse), screen and (max-width: 640px)',
// },
