/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy background family
        night: {
          950: "#0B1220",
          900: "#0E1729",
          800: "#122036",
          700: "#1A2B45",
          600: "#22314A"
        },
        // Layered surfaces for cards/panels
        "surface-1": "#0E1729", // panels
        "surface-2": "#141F33", // cards
        "surface-3": "#18253D", // hovered cards / modals body
        "surface-border": "#22314A",
        "surface-chip": "#0D2243",
        // Accent (indigo/blue)
        accent: {
          400: "#6B8DFF",
          500: "#4F7FFF",
          600: "#3E63CC"
        }
      }
    }
  },
  plugins: [],
};
