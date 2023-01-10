/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {

    colors: {
      'blue': '#23A6F0',
      'text-gray': '#18191F',
      'orange': '#F4511E',
      'light-grey': '#F5F5F5',
      'dark-grey': '#818181',
      'dark': '#0A142F',
      'grey': '#F9F9F9',
      'white': '#FFFFFF',
      'muted': "#BDBDBD",
      'border-grey': '#E6E6E6',
      'light-orange': 'rgba(244, 81, 30, 0.07)',
      'off-white': "linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%)"
    },
    fontFamily: {
      inter: ['Inter'],
      poppins: ['Poppins']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero-bg.png')",
        'overlay': "linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%);",
      },
      boxShadow: {
        'light': " 0px 12px 19px rgba(0, 0, 0, 0.15);",
        'btn': "0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519)",
        'card': "0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714)",
        'form': "0px 4px 63px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [
    require('tailwindcss-container-bleed'),
  ],
};