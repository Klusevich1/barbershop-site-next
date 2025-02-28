import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        black: '#242424',
        custom_beige: '#C59D5F',
        gray_text: "#9c9c9c",
        gray_bg: "#353535",

        black_80: "#464646",
        black_60: "#747474",
        black_40: "#A2A2A2",
        black_20: "#D1D1D1",
        black_10: "#E8E8E8",
        black_5: "#F3F3F3",
      },
    },
  },
  plugins: [],
} satisfies Config;
