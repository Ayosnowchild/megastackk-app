/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        megaStackSecondary: "#25284B",
        megaStackNeutralblack: "#111222",
        megaStackPrimaryBlueShade: "#247AB5",
        megaStackWarning: "#F7BA72",
        megaStackPrimaryBlueBase: "#55A5DB",
        megaStackSecondaryTint: "#C3C5DC",
      },
      spacing: {
        1032: "64.5rem",
        1002: "62.625rem",
        672: "35rem",
        542: "22.875rem",
        729: "35.25rem,",
        356: "22.5rem",
        256: "16rem",
        196: "14.5rem",
        173: "10.8rem",
        44: "2.75rem",
        128: "8rem",
      },
    },
  },
  plugins: [],
};
