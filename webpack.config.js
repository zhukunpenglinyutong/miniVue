const path = require('path');

module.exports = {
  
  // 先开发模式，等做完了再生产模式
  mode: 'development',
  
  entry: './src/vue.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue.js'
  },

  // 模块规则
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }

};