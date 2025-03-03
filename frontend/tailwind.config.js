/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include all files in src/
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8", // Google Blue
        secondary: "#00C853", // AI Green
        darkBg: "#121212", // Dark background
        darkCard: "#1E1E1E", // Slightly lighter dark
        textPrimary: "#FFFFFF", // White text
        textSecondary: "#B3B3B3", // Grey text
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [],
};
