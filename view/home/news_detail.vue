<template>
  <div class="detail">
      <h2><router-link to="/news?pn=1" class="back">News</router-link> >> details</h2>
      <div class="content" >
        <h1>{{newsDetail.title}}</h1> 
        <div class="header">
            <span>作者：{{newsDetail.author}}</span><span>文章来源：{{newsDetail.from}}</span><span>更新时间：{{newsDetail.updateTime}}</span>
        </div>
        <p v-html="newsDetail.content" class="con"></p>
      </div>
  </div>
</template>
<script>
import timeTrans from "../../../util/dateConfig";
export default {
  data() {
      return {
          newsDetail:{}
      }
  },
  methods:{
      getNews() {
          this.$axios.get('getNews',{id:this.$route.query.id}).then(res => {
              res.data.updateTime = timeTrans(res.data.updateTime).substr(0,10);
              this.newsDetail = res.data
          })
      },
      addView() {
          this.$axios.post('addView',{id:this.$route.query.id}).then(res => {
          })
      }
  },
  created() {
      this.getNews();
      this.addView()
  }
}
</script>
<style>
.con p img{
    text-align: center;
}
</style>

<style scoped>
.detail{
  margin: 0 auto;
  width: 70%;
}
h2{
  padding: 10px 0;
  margin: 10px 0;
  font-size:28px;
  color:#2e6da4;
  border-bottom: 3px solid #2e6da4;
}
h1{
    padding:10px 0 20px;
    border-bottom:1px solid #ddd;
    line-height: 30px;    
}
.header{
    text-align: right;
}
.header span{
    margin: 0 10px;
}
.back{
    color:#2e6da4;
}
.back:hover{
    color:#000;
}
.content{
    margin: 0 auto;
    width: 70%;
    text-align: center;
}
p{
    margin: 10px 0;
    font-size:16px;
    line-height: 2em;
    text-align: left;
    text-indent: 2em;
}
.right{
    text-align: right;
}

</style>
