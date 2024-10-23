import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff6ec",
        foreground: "var(--foreground)",
        MainOrange: "#ff4500",
        DarkGray: "#4f4f4f",
      },
    },
  },
  plugins: [],
};
export default config;
