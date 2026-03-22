/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220 25% 4%)",
        foreground: "hsl(0 0% 100%)",
        primary: {
          DEFAULT: "hsl(38 88% 58%)",
          foreground: "hsl(0 0% 0%)",
        },
        muted: {
          DEFAULT: "hsl(220 18% 14%)",
          foreground: "hsl(220 12% 50%)",
        },
        card: {
          DEFAULT: "hsl(220 22% 7%)",
          foreground: "hsl(0 0% 100%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
