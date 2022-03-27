module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // 비동기 처리를 위해
    ['@babel/plugin-transform-runtime']
  ]
}
