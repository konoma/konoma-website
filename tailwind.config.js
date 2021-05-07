module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        indigo: {
          100: "#F0F0FF",
          200: "#EAECFF",
          300: "#A3A6FF",
          500: "#8480FF",
          700: "#6354EB",
          900: "#35278C",
        },
        grey: {
          100: "#FAFAFF",
          500: "#AEAEBD",
          700: "#7F7E8F",
          900: "#282733",
        },
        tangerine: {
          300: "#FFC2AD",
          500: "#FC9D79",
          700: "#FA7946",
        },
        yellow: {
          300: "#FFE4B3",
          500: "#FCD690",
          700: "#FAC96E",
        },
        blue: {
          300: "#B0DAFF",
          500: "#67B3F5",
          700: "#238EEB",
        },
        green: {
          700: "#ADF0DE",
          900: "#56C4A7",
        },
        red: {
          700: "#FFB8B3",
          900: "#F5796C",
        },
      },
      fontFamily: {
        sans: ["Spezia", "sans-serif"],
        serif: ["Cambon", "serif"],
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "17px",
          },
        ],
        sm: [
          "16px",
          {
            lineHeight: "22px",
          },
        ],
        "sm-desktop": [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        base: [
          "17px",
          {
            lineHeight: "27px",
            letterSpacing: "-0.01em",
          },
        ],
        "base-desktop": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.02em",
          },
        ],
        lg: [
          "19px",
          {
            lineHeight: "26px",
          },
        ],
        "lg-desktop": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.01em",
          },
        ],
        xl: [
          "19px",
          {
            lineHeight: "26px",
          },
        ],
        "xl-desktop": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "2xl": [
          "21px",
          {
            lineHeight: "28px",
          },
        ],
        "2xl-desktop": [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
        "3xl": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "3xl-desktop": [
          "40px",
          {
            lineHeight: "50px",
          },
        ],
        "4xl": [
          "26px",
          {
            lineHeight: "34px",
            letterSpacing: "-0.02em",
          },
        ],
        "4xl-desktop": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
          },
        ],
        "5xl": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.03em",
          },
        ],
        "5xl-desktop": [
          "64px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.01em",
          },
        ],
      },
      spacing: {
        0.5: "4px",
        1: "8px",
        1.5: "12px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        10: "80px",
        15: "120px",
        20: "160px",
        24: "192px",
        25: "200px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
