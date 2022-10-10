module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'storyblok/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  safelist: ['bg-white'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
