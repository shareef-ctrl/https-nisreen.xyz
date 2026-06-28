import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gulf: {
          navy: "#08243f",
          teal: "#0f9f9a",
          mint: "#87e6cf",
          gold: "#d9b55f",
          ink: "#101828"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(15, 159, 154, 0.22)",
        panel: "0 18px 60px rgba(8, 36, 63, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
