/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
     
      gridTemplateColumns: {
      'custom': '320px 1fr',
      'custom-xl': '270px 1fr'
      },
      boxShadow : {
       'custom-shadow' : '10px 10px 80px -10px #0000001a'
      },
      screens: {
      'xs': {min: '320px' , max : '800px'},
      'xl': {min: '800px' , max : '1000px'},
      'xxs': {min: '320px' , max : '500px'}
      },
      colors: {

        'MarineBlue': 'hsl(213, 96%, 18%)',
        'purplishBlue': 'hsl(243, 100%, 62%)',
        'PastelBlue': 'hsl(228, 100%, 84%)',
        'lightBlue': 'hsl(206, 94%, 87%)',
        'StrawberryRed': 'hsl(354, 84%, 57%)',
        'CoolGray': 'hsl(231, 11%, 63%)',
        'lightGray': 'hsl(229, 24%, 87%)',
        'background-color': 'hsl(217, 100%, 97%)',
        'Alabaster': 'hsl(231, 100%, 99%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      spacing: {
        '3.32px': '3.32px',
        '1px': '1px',
        '2px': '3px'
      },
      borderWidth: {
        '1': '1px'
      },
      zIndex : {
      '-1' : '-1'
      },
      borderRadius: {
        '50%' : '50%'
      },

    
      fontSize: {
        '12': '12px',
        '13': '13px',
        '11': '11px',
        '14.4': '14.4px',
        '32': '32px',
        '17.6': '17.6px',
        '13.28': '13.28px',
        '19.2': '19.2px',
        '20.8': '20.8px',
        '12.8' : '12.8px',
        'responsive': 'clamp(5px, 4vw, 15px)',
      },
      
      height: {
        '460': '75%',
        '56': '56px',
        '90' : '90%',
        'custom-height' : 'min(90% , 700px )',

      },
      maxWidth : {
        '37.5' : '37.5rem',
        '600' : '600px'
      },
      width: {
        '53': '52%',
        '30': '30%',
        '50': '50%',
        '90': '90%',
        'custom-width' : 'min(100% , 1000px )',



      },
      backgroundImage: {
        'side-bar-background': "url('./images/bg-sidebar-desktop.svg')",
        'side-bar-background-mob': "url('./images/bg-sidebar-mobile.svg')"
      },
      padding : {
        'custom-padding' : '4rem 2rem 2rem',
        'custom-padding-xl' : '4rem 1rem 2rem'
      }
    },
  },
  plugins: [],
}

