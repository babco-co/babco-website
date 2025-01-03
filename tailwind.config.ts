import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-black": "#0B0A07",
        "primary-white": "#FFFFFF",
        "primary-pink": "#FFC0F1",
        "light-gray": "#808080",
        "medium-gray": "#8A8A8A",
        "dark-gray": "#6C6C6C",
        green: "#CAF4CB",
        yellow: "#F7F272",
        blue: "#83B2F0",
        error: "#DD2E44",
      },
    },
  },
  plugins: [],
};
export default config;
