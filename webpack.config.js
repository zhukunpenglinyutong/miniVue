const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  
  // 先开发模式，等做完了再生产模式
  mode: 'development',
  
  entry: {
    vue: './src/vue.js', // 源文件入口
    index: './test/viewTest/index.js' // 启动测试JS
  },
  
  // 启动一个serve
  devServer: {
    contentBase: './dist',
    open: true
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      // 配置，index.html 模板，以此为模板进行注入
      template: './test/viewTest/index.html'
    })
  ]

};