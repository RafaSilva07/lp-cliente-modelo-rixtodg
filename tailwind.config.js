/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rixto: {
          dark: "#070716",
          purple: "#18102F",
          purpleLight: "#2B1B55",
          blue: "#38BDF8",
          blueSoft: "#7DD3FC",
          white: "#F8FAFC",
          muted: "#CBD5E1",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.18)",
      },
    },
  },
  plugins: [],
};