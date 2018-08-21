// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 10 versions']
    }),
    require('postcss-px2rem')({
      remUnit: 75
    })
  ]
}
