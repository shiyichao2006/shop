<template>
    <div>
        news---{{id}}
        <commentbox :id='this.id' @getson='getsonmessage'></commentbox>

        <div><span>子组件传的值是：{{sonMessage}}</span></div>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
      return{
        id:this.$route.params.id,
        newsinfo:{},
        sonMessage:''
      }
    },
    methods:{
      getnews(){
        this.$http.get('api/news'+this.id).then(result=>{
          this.newsinfo=result.body.message
          console.log(this.newsinfo)
        })
      },
      getsonmessage(x){
        this.sonMessage=x
        console.log(this.sonMessage)
      }
    },
    components:{
      commentbox:comment
    },
    created(){
      //this.getnews()
    }
}
</script>

<style lang="less">
    
</style>