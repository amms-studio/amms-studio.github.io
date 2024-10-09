/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
