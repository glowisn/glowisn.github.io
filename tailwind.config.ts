import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "naver-green": "var(--naver-green)",
        "naver-logoGreen": "var(--naver-logoGreen)",
      },
    },
  },
  plugins: [],
};
export default config;
