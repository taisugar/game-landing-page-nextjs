import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "712px",
      desktop: "1440px",
    },
    extend: {
      truncate: {
        lines: {
          1: "1",
          2: "2",
          3: "3",
          5: "5",
          8: "8",
        },
      },
    },
    zIndex: {
      "-1": "-1",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "75": "75",
      "100": "100",
      "1000": "1000",
      "1001": "1001",
      "1002": "1002",
      auto: "auto",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    backgroundColor: ["group-active"],
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
