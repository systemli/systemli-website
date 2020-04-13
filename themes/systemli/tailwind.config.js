module.exports = {
  theme: {
    fontFamily: {
      'body': ['"TSTAR TW PRO"' , 'sans-serif'],
    },
    colors: {
      lightblue: '#42abee',
      pink: '#ff52ad',
      lightgrey: '#f5f5f5',
      grey: '#cbd5e0',
      white: '#fff',
      black: '#000',
    },
    fontSize: {
      'xxs': '12px',
      'xs': '14px',
      's': '16px',
      'm': '17px',
      'l': '23px',
      'xl': '28px',
    },
    boxShadow: {
      'm': '0 0 5px 0px rgba(0,0,0,0.25)',
    },
    extend: {
      width: {
        '19/20': '95%',
        '96': '24rem',
      },
      maxWidth: {
        'half': '50%',
        '95': '95%',
      },
      scale: {
        '101': '1.01',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-3': 'span 3 / span 16',
        'span-13': 'span 13 / span 16',
        'span-5': 'span 5 / span 13',
        'span-8': 'span 8 / span 13',
        'span-1': 'span 1 / span 8',
        'span-2': 'span 2 / span 8',
        'span-6': 'span 6 / span 8',
        'span-7': 'span 7 / span 8',
      },
    }
  },
  variants: {},
  plugins: [],
}
