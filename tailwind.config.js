/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  prefix: "tw-",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1480px",
    },
    borderRadius: {
      none: "0",
      xs: ".125rem",
      sm: ".375rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      xl: "1rem",
      full: "9999px",
    },
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5625rem", // 25px
      "2xl": "1.75rem", // 28px
      "3xl": "2rem", // 32px
      "4xl": "2.375rem", // 38px
    },
    extend: {
      colors: {
        'header-purple': '#281844',
        'header-purple-brown': '#340e3a',
        'text-color-hover': 'rgb(159,125,323)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
};
