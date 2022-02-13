module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        kumar: "'Kumar One Outline', 'cursive'"
      },
      colors: {
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        primaryCyan: 'hsl(180, 66%, 49%)',
        primaryDarkViolet: 'hsl(257, 27%, 26%)',
        darkBlue: 'hsl(255, 11%, 22%)',
        darkViolet: 'hsl(260, 8%, 14%)'
      },
      width: {
        mobileSize: '1000px',
        '82': '21rem',
        '84': '22rem',
        '100': '35rem'
      },
      height: {
        mobileSize: '1000px',
        '82': '21rem',
        '84': '22rem'
      },
      scale: {
        '140': '1.4'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}