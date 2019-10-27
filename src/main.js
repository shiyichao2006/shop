//安装导入 vue 包（npm i vue -S）
import Vue from 'vue'
//import Vue from '../node_modules/vue/dist/vue.js'

//安装导入 vue-router 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//安装导入 vue-resource 包
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入mint-ui
//首先，安装 babel-plugin-component（npm install babel-plugin-component -D）
//import { Header } from 'mint-ui'
//Vue.component(Header.name, Header)
//全部导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入 组件模板 组件
//  npm i vue-loader vue-template-compiler -D
//  在配置文件中，新增loader配置项 { test:/\.vue$/, use: 'vue-loader' }
import app from './App.vue'

//导入 路由 组件
import router from './router.js'



//创建 vue 对象
var vm = new Vue({
  el: '#app',
  data: {

  },
  methods:{

  },
  router: router,
  /* render: function (createElements) {
    return createElements(login)
  } */
  render: c => c(app),

})

