<template>
  <div class="newslist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/news/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            src="http://images.china.cn/attachement/jpg/site1000/20120514/0019b91ecbd1111ae14407.jpg"
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:2012-12-12 12:12:12</span>
              <span>点击:12次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  methods: {
    getNewslist() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
          console.log(this.newslist);
        }
      });
    }
  },
  created() {
    this.getNewslist();
  }
};
</script>

<style lang="less" scoped>
.newslist {
  .mui-table-view {
    .mui-table-view-cell {
      p {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 12px;
        }
      }
      h1 {
        font-size: 14px;
        background-color: #f40;
      }
    }
  }
}
</style>