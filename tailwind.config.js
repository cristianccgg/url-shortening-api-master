/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        "1-Cyan": "hsl(180, 66%, 49%)",
        "2-Dark-Violet": "hsl(257, 27%, 26%)",

        // ### Secondary

        "3-Red": "hsl(0, 87%, 67%)",

        // ### Neutral

        "4-Gray": "hsl(0, 0%, 75%)",
        "5-Grayish-Violet": "hsl(257, 7%, 63%)",
        "6-Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "7-Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "shorten-mobile": "url('/public/images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('/public/images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('/public/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('public/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
