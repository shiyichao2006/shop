//安装导入 vue 包（npm i vue -S）
import Vue from 'vue'

//import Vue from '../node_modules/vue/dist/vue.js'

//安装导入 vue-router 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
  render: c => c(app)
})

