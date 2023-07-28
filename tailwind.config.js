/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8847d9",
        secondary: "#f3d261",
        tertiary: "#87f9f9",
      },
      boxShadow: {
        container: "0 50px 100px -12px #8847d9",
        modal: "0 30px 50px -10px #8847d9",
        deep: "#00000059 0 8px 20px",
      },
    },
  },
  plugins: [],
};
