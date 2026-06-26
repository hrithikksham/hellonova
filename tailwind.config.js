
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        canela: ["Canela", "serif"],
      },

      colors: {
        primary: "#2563EB",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        glow: "0 20px 60px rgba(37,99,235,0.15)",
      },
    },
  },

  plugins: [],
};