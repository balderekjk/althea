/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Source Sans Pro"', 'sans-serif'] },
      screens: {
        xs: '400px',
      },
    },
  },
  safelist: [
    'sm:ml-6',
    'sm:mr-6',
    'sm:mx-auto',
    'sm:float-left',
    'sm:float-right',
    'sm:float-none',
  ],
  plugins: [],
  corePlugins: { preflight: false },
  darkMode: 'selector',
};
