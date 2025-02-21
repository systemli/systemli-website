module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'body': ['"TSTAR TW PRO"' , 'sans-serif'],
    },
    colors: {
      lightblue: '#42abee',
      pink: '#ff52ad',
      lightgrey: '#f5f5f5',
      grey: '#cbd5e0',
      darkgrey: '#a0a0a0',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    fontSize: {
      'xxs': '.75rem', //12px
      'xs': '.875rem', //14px
      's': '1rem', //16px
      'm': '1.063rem', //17px
      'ml': '1.25rem', //20px
      'l': '1.438rem', //23px
      'xl': '1.75rem', //28px
    },
    boxShadow: {
      'm': '0 0 5px 0px rgba(0,0,0,0.25)',
      none: 'none',
    },
    extend: {
      width: {
        '18/20': '90%',
        '19/20': '95%',
        '96': '24rem',
        '375': '375px',
        // should be there by default, not sure why it was not working
        '14': '3.5rem',
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
        '3/4': '75vh',
        '140': '35rem',
        '600': '40.5rem',
      },
      scale: {
        '101': '1.01',
      },
      gridTemplateColumns: {
        '19': 'repeat(19, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        'post-list': '5rem auto',
      },
      gridColumn: {
        'span-19': 'span 19 / span 19',
        'span-24': 'span 24 / span 24',
      },
      inset: {
        // should be there by default, not sure why it was not working
        '4': '1rem',
      }
    }
  },
  variants: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      padding: ['responsive', 'hover'],
      margin: ['responsive', 'hover'],
  },
  plugins: [],
};
