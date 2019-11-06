<template>
  <div id="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <!-- <mt-swipe-item v-for="item in imageslist" :key="item.url">
        <img :src="item.url" alt />
      </mt-swipe-item> -->
      <mt-swipe-item>
        <img src="../images/menu3.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../images/menu3.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../images/menu3.png" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 图标 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            imageslist:[]
        }
    },
    methods:{
        getlunbotu(){
            this.$http.get("url").then(
                result=>this.imageslist=result.body.message
            )
        }
    },
    created(){
        //this.getlunbotu()
    }
};
</script>

<style lang="less">
#home {
  .mint-swipe-items-wrap {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mui-table-view {
    img {
      width: 100%;
    }
  }
}
</style>