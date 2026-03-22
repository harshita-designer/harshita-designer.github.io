/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        foreground: "#f8f9fa",
        primary: {
          DEFAULT: "#f0a827",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#111827",
          foreground: "#6b7280",
        },
        card: {
          DEFAULT: "#0a0e18",
          foreground: "#f8f9fa",
        },
        border: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.18em",
        "extra-wide": "0.22em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
