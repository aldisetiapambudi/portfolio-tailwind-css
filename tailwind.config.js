module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  prefix: 'tw-',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
        kas: '#ff6b00'
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [ ],
}
