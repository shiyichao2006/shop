import VueRouter from 'vue-router'

//引入组件
import home from './page/home.vue'
import search from './page/search.vue'
import shopcar from './page/shopcar.vue'
import user from './page/user.vue'
import newslist from './page/home/newslist.vue'
import news from './page/home/news.vue'




//创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/user',component:user},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
    {path:'/home/newslist',component:newslist},
    {path:'/home/news/:id',component:news},

  ],
  linkActiveClass:'mui-active'
})

//暴露路由对象
export default router