module.exports = {
  theme: {
    fontFamily: {
      'body': ['"TSTAR TW PRO"' , 'sans-serif'],
    },
    colors: {
      lightblue: '#42abee',
      pink: '#ff52ad',
      lightgrey: '#f5f5f5',
      white: '#fff',
      black: '#000',
    },
    fontSize: {
      'xs': '12px',
      's': '16px',
      'm': '17px',
      'l': '23px',
      'xl': '28px',
    },
    boxShadow: {
      'm': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-3': 'span 3 / span 16',
        'span-13': 'span 13 / span 16',
      },
    }
  },
  variants: {},
  plugins: [],
}
