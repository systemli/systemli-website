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
        '19': 'repeat(19, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-19': 'span 19 / span 19',
        'span-24': 'span 24 / span 24',
      },
    }
  },
  variants: {},
  plugins: [],
}
