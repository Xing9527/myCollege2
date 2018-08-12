<template>
  <div class="homepage">
      <div class="swiper">
          <el-carousel :interval="5000" arrow="always" height="350px" type="card">
                <el-carousel-item v-for="item in swiperList" :key="item._id" >
                    <router-link :to="item.path">
                        <img :src="item.img" alt="">
                        <h4 class="swiper-title">{{item.title}}</h4>
                    </router-link>
                </el-carousel-item>
          </el-carousel>
      </div>
      <div class="news">
          <router-link to="/news?pn=1" class="more">更多>></router-link>          
          <h2>头条要闻</h2>
          <ul class="clear">
              <li v-for="item in newsList" :key="item._id">
                    <router-link :to="'/news/detail?id='+item._id"><img :src="item.img" alt=""></router-link>
                    <h3><router-link :to="'/news/detail?id='+item._id">{{item.title}}</router-link></h3>
                    <p>{{item.createTime}}</p>
                    <p>{{item.contentText}}</p>
              </li>
          </ul>
      </div>
      <div class="jobs">
          <router-link to="/jobs?pn=1" class="more">更多>></router-link>          
          <h2>招生就业</h2>
          <ul class="clear">
              <li v-for="item in jobsList" :key="item._id">
                    <router-link :to="'/jobs/detail?id='+item._id"><img :src="item.img" alt=""></router-link>
                    <h3><router-link :to="'/jobs/detail?id='+item._id">{{item.title}}</router-link></h3>
                    <p>{{item.createTime}}</p>
                    <p>{{item.contentText}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import timeTrans from "../../../util/dateConfig";
export default {
  data() {
      return {
          swiperList:[],
          newsList:[],
          jobsList:[]
      }
  },
  methods:{
      getSwiper() {
          this.$axios.get('getSwiper',{type:1}).then(res => {
              this.swiperList = res.data;
          })
      },
      getNews() {
          this.$axios.get('getNews').then(res => {
              for(var i=0;i<res.data.length;i++){
                  res.data[i].createTime = timeTrans(res.data[i].createTime).substr(0,10);
                  res.data[i].contentText = res.data[i].contentText.substr(0,50) + "..."
              }
              this.newsList = res.data
          })
      },
      getJobs() {
          this.$axios.get('getJobs').then(res => {
              for(var i=0;i<res.data.length;i++){
                  res.data[i].createTime = timeTrans(res.data[i].createTime).substr(0,10);
                  res.data[i].contentText = res.data[i].contentText.substr(0,50) + "..."
              }
              this.jobsList = res.data
          })
      }
  },
  created() {
      this.getSwiper();
      this.getNews();
      this.getJobs()
  }
}
</script>

<style scoped>
/* 轮播图样式 */
.swiper{
    position: relative;    
    height: 350px;
}
.swiper img{
    width:100%;
    height: 350px;
}
.swiper-title{
    position: absolute;
    left: 0;
    top:50px;
    padding: 8px 15px;
    color:#fff;
    font-size: 18px;
    background:rgba(0,0,0,.5);
}

/* 头条新闻样式 */
.news,.jobs{
    width:75%;
    margin: 30px auto 0;
}
.news{
    border-bottom:1px solid #ddd;
}
h2{
    margin: 20px 0;
    font-size:20px;
    font-weight: 700;
}
.more{
    float: right;
}
li img{
    height: 130px;
    width: 100%;
}
li{
    float: left;
    margin: 20px 0;
    width: 300px;
    border-top:3px solid rgb(224,130,61);
}
li:nth-of-type(2){
    margin: 0 30px;
    border-top:3px solid #2e6da4;
}
li h3{
    margin: 10px 0 0;
    font-size:16px;
    color:#000;
}
li p:nth-of-type(1){
    text-align: right;
}
li p {
    color:#888;
}
.jobs li{
    border-top:3px solid #2e6da4;
}
.jobs li:nth-of-type(2){
    border-top:3px solid rgb(224,130,61);
}
</style>
