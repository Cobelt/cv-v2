import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        archivo: "Archivo",
        latoLight: "LatoLight",
        latoBold: "LatoBold",
        latoReg: "LatoReg",
        jostLight: "JostLight",
        jostBold: "JostBold",
        jostReg: "JostReg",
        rubikLight: "RubikLight",
        rubikBold: "RubikBold",
        rubikReg: "RubikReg",
      },
    },
  },
  plugins: [],
}
export default config
