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
      'xxs': '.75rem', //12px
      'xs': '.875rem', //14px
      's': '1rem', //16px
      'm': '1.063rem', //17px
      'l': '1.438rem', //23px
      'xl': '1.75rem', //28px
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
      height: {
        '95': '95%',
      },
      maxHeight: {
        '1/2': '50vh',
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
};
