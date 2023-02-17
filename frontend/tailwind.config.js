/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-ocean": "#03001C",
        "deep-purple": "#301E67",
        "loserpop-blue": "#5B8FB9",
        "light-mint": "#B6EADA",
      },
    },
  },
  plugins: [],
};
