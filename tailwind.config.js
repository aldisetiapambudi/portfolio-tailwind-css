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
        kas: '#ff6b00',
        kedua: '#8391FD',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        inter: ['Inter']
      },
      animation:{
        'bounce-slow' : 'bounce 6s linear infinite',
        'upDown' : 'updown 2s ease-in-out infinite',
      },
      keyframes: {
        updown: {
            '0%, 100%': { transform: 'translateY(-10px)'},
            '50%': { transform: 'translateY(0px)'},
          },
                
      },
    },
  },
  plugins: [ ],
}
