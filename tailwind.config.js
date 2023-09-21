/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',
    './components/**/*.{html,ts}'
  ],
  theme: {
    maxWidth:{
      container:"1440px",
      contentContainer:"1140px",
      containerSmall:"1024px",
      containerxs:"768px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"687px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      fontFamily:{
        bodyFont:["Monserrat","sans-serif"],
        titleFont:["Inter", "sans-serif"],
      },
      boxShadow:{
        navbarShadow:"0 10px 30px -10px rgba(2,12,27,0.7)"
      },
      colors:{
        bodycolor:"#d17c0d",
        textBlue:"#173899",
        textLight:"#ccd6f6",
        textDark:"#8892b0",
        cobtact:"#dddddd",
        hoverColor:"rgba(100,255,218,0.1)",
      }
    },
  },
  plugins: [],
}

