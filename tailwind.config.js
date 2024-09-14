/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    colors: {
      theme1: '#ff6a00',
      theme2: '#ffffff',
      theme3: '#333333',
      theme4: '#757575',
      text1: '#191919',
      text2: '#b0b0b0',
      text3: '#424242',
      text4: '#e5e5e5',
      text5: '#616161'
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica, Arial', 'Microsoft Yahei']
    },
    extend: {}
  },
  plugins: []
}
