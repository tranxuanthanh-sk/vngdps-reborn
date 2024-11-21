/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"],
      'bevnpro': ["Be Vietnam Pro", "sans-serif"]
    }
  },
  plugins: [require('flowbite/plugin')],
}
