/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/banner.jpg')",
      },
      fontFamily: {
        nova: ['"Nova Square"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      screens: {
        tablet: "768px",
        laptop: "1280px",
      },
    },
  },
  plugins: [],
};
