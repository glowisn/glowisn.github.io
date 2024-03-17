import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      margin: {
        "left-sur-margin": "calc(-75px - 1.75em)",
      },
      colors: {
        "custom-black": "#252525",
        "custom-gray": "#d9d9d9",
        "custom-divider": "#c0c0c0",
        "custom-caption" : "#848484",
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
