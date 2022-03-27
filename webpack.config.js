// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')

// export
module.exports = {
  resolve: {
    // 확장자를 생략해도 import 잘되게 수정
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  // 파일을 읽어들이기 시작하는 진입점 설정 - webpack은 javascript 파일을 지정
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname 은 현재 파일의 경로
    // path: path.resolve(__dirname, 'dist'), // node js 에서 필요로 하는 절대 경로 적어야 함
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          //vue 파일 내의 style을 해석
          'vue-style-loader',
          // 해석된 css를 적용
          'style-loader',
          // 먼저 적용됨: javascript에서 css를 해석
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        // js 파일을 읽어 babel을 적용하기 위해 설정
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],

  // devServer: {
  //   host: 'localhost'
  // }
}
