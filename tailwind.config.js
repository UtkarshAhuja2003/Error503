/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      colors: {
        'primary': '#1D7ADB',
        'secondary': '#04434E',
        'light': '#A8C7E7',
      },
    },
  },
  plugins: [],
};
