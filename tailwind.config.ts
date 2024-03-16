import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "naver-green": "var(--naver-green)",
        "naver-logoGreen": "var(--naver-logoGreen)",
        "custom-color": "var(--custom-color)",
      },
    },
    screens: {
      print: { raw: "print" },
      screen: { raw: "screen" },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "print"],
    },
  },
  plugins: [],
};
export default config;
