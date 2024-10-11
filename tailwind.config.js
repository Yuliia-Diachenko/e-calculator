/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: { colors: {
      gray: {
        250:'#eeeeee',
        550: '#d9d9d9',
      },
    }},
  },
  plugins: [],
};
