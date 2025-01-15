import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          dark: "#000",
          light: "#f7f5f2",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          dark: "#ededed",
          light: "#2E2E2E",
        },
        text: {
          primary: {
            light: "#2E2E2E",
            dark: "#FFFFFF",
          },
        },
        border: {
          primary: {
            light: "rgba(0, 0, 0, 0.27)",
            dark: "rgba(255, 255, 255, 0.27)",
          },
          sec: {
            light: "rgba(0, 0, 0, 0.30)",
            dark: "rgba(255, 255, 255, 0.30)",
          },
        },
        brand: { light: "#FF4365", dark: "#FFC0F1" },
        "primary-black": "#0B0A07",
        "primary-white": "#FFFFFF",
        "primary-pink": "#FFC0F1",
        "sec-pink": "#DE468A",
        "light-gray": "#808080",
        "medium-gray": "#8A8A8A",
        "dark-gray": "#6C6C6C",
        green: "#CAF4CB",
        yellow: "#F7F272",
        blue: "#83B2F0",
        error: "#DD2E44",
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
