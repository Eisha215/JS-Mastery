/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  " relative: true",
  "transform: (content) => content.replace(/taos:/g, '')",
"files: ['./src/*.{html,js}'"],
  
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      colors: {
        "gradient" : "linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%)",
      },
      fontFamily: {
        "poppins" : ["Poppins", "sans-serif"],
      },
      

      animation: {
        left:'left 1s ease-in' ,
        right:'right 1s ease-in',

        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        slideUp: 'slideUp 1s linear 2s ',
        showUp: 'showUp 0.7s linear',
        popUp: 'popUp 3s ease-in',
      },
      keyframes: {
        left: {
          '0%': { transform: 'translateX(-100%)' ,
          opacity: '0'},
          '100%': { transform: 'translateX(0%)',
          opacity: '1'
         },
        },
        right: {
          '0%' : {transform: 'translateX(100%)',
                  opacity: '0'},
          '100%' : {transform: 'translateX(0%)',
                  opacity: '1'},
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideUp: {
          '0%' : {transform: 'translateY(2em)',
                  opacity: '0',
        },
          '100%' : {transform: 'translateY(0)',
                    opacity: '1',},
        },

        showUp: {
          '0%' : {transform: 'translateY(0)',
          opacity: '0.8',
        },
        '100%' : {transform: 'translateY(-17em)',
          opacity: '1',
        },
        

        popUp: {
          '0%': {opacity: '0' },
          '100%': {opacity: '1'},
        }
      },
    },
      
    },
}}
  plugins: [
    require('flowbite/plugin'),
    require('taos/plugin'),
  ]

