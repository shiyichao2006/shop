//导入 path
const path = require('path')

//安装导入 html-webpack-plugin 插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//导入 处理.vue文件 的插件 
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// webpack配置文件
module.exports = {
  // 入口文件
  entry: path.join(__dirname, './src/main.js'), 
  // 输出选项
  output: { 
    // 输出路径
    path: path.join(__dirname, './dist'), 
    // 输出文件名称
    filename: 'bundle.js' 
  },
  //配置插件节点
  plugins: [
    //配置 html-webpack-plugin 插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    //配置 处理.vue文件 的插件
    new VueLoaderPlugin()
  ],
  // 配置第三方loader模块
  module: { 
    rules: [
      // 处理 .css 文件的 loader（ npm i style-loader css-loader --D）
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 

      // 处理 .less 文件的 loader（npm i less-loader less -D）
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, 

      // 处理 .scss 文件的 loader（npm i sass-loader node-sass --save-dev）
      // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, 

      //处理 图片路径的 loader（npm i url-loader file-loader --save-dev）
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1024&name=[hash:8]-[name].[ext]' }, 

      //处理 字体文件的 loader
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },  

      // 配置 Babel 来转换高级的ES语法
      //{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, 
      
      // 处理.vue 文件的 loader（ npm i vue-loader vue-template-compiler -D ）
      { test: /\.vue$/, use: 'vue-loader' } 
    ]
  },
  resolve: {
    // 修改 Vue 被导入时候的包的路径
    alias: { 
      "vue$": "vue/dist/vue.js"
    }
  }
}