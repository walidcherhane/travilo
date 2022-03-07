module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{jsx}", 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': "#FF00C7",
        'primary-200': "#FF64DD"
      },
      boxShadow: {
        '3xl': '0px 40px 50px 12px rgba(117,117,117,0.76)',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
    fontFamily: {
      'danmark': ['DanmarkURWTUlt'],
      'playfair' : ['Playfair Display', "serif"]
    },
    backgroundSize: {
      "100%": "100%",
      "120%": "120%",
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),         
    require('flowbite/plugin')
  ],
}