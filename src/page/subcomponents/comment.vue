<template>
    <div>
      <textarea placeholder="qingshuru" maxlength="120" v-model="msg"></textarea>
      <input type="button" @click="postComment">
      <input type="button" @click="get(msg)" value="向父组件传值">

        pinglun----{{this.id}}
    </div>
</template>

<script>
export default {
    data(){
      return{
        comments:[],
        msg:''
      }
    },
    props:['id'],
    methods:{
      postComment(){
        this.$http.post('api/'+this.$route.params.id,{
          content:this.msg.trim()
        }).then(result=>{
          var obj ={
            user_name:"shiyichao",
            add_time:Date.now(),
            content:this.msg.trim()
          }
          this.comments.unshift(cmt);
          this.msg=""
        })
      },
      get(xx){
        this.$emit('getson',xx)
      }
    }
}
</script>

<style lang="less">
    
</style>