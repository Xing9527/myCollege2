<template>
  <div class="list">
      <h2>Admission & Employment</h2>
      <div class="top">
          <div class="notice">
              <h3>公告</h3>
              <p class="notice-content">本站数据来源于各大高校官网，如有疑问，请联系作者。</p>
          </div> 
          <div class="swiper">
              <el-carousel :interval="5000" arrow="always" height="250px">
                <el-carousel-item v-for="item in swiperList" :key="item._id">
                  <router-link :to="'/jobs/detail?id='+item._id">
                      <img :src="item.img" alt="">
                      <h4 class="swiper-title">{{item.title}}</h4>
                  </router-link>
                </el-carousel-item>
              </el-carousel>
          </div>
          <ul class="right"> 
              <li v-for="item in jobs" :key="item._id">
                <span>通知：</span><router-link :to="'/jobs/detail?id='+item._id" class="title-warp">{{item.title}}</router-link>
              </li>
          </ul>
      </div>
      <ul class="container">
          <li class="item" v-for="item in jobsList" :key="item._id">
            <div class="img">
                <router-link :to="'/jobs/detail?id='+item._id">
                  <img :src="item.img" alt="">
                </router-link>
            </div>
            <div class="text" >
                <p>
                  <i class="iconfont icon-time"></i> {{item.createTime}}
                  <span class="view"><i class="iconfont icon-eye"></i> {{item.view}}</span>
                </p>
                <h3><router-link :to="'/jobs/detail?id='+item._id">{{item.title}}</router-link></h3>
                <p>{{item.contentText}}</p>
            </div>
          </li>
      </ul>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50"
          @current-change="getPageData">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import timeTrans from "../../../util/dateConfig";
export default {
  data() {
    return {
      swiperList:[],
      jobsList:[],
      jobs:[]
    }
  },
  methods:{
    getSwiper() {
      this.$axios.get('getSwiper',{type:3}).then(res => {
        this.swiperList = res.data
      })
    },
    getJobs() {
      this.$axios.get('getJobs',{pn:this.$route.query.pn}).then(res => {
        for(var i=0;i<res.data.length;i++){
          res.data[i].createTime = timeTrans(res.data[i].createTime).substr(0,10);
          res.data[i].contentText = res.data[i].contentText.substr(0,30) + "..."
        }
        this.jobsList = res.data
      })
    },
    getData() {
      this.$axios.get('getList').then(res => {
        for(var i=0;i<res.data.length;i++){
          res.data[i].title = res.data[i].title.substr(0,25)
        }
        this.jobs = res.data
      })
    },
    getPageData(pn){
        //   console.log(pn)
        this.$router.push({path:"/jobs",query:{pn}})
        this.getJobs()
    },
  },
  created() {
    this.getSwiper();
    this.getJobs();
    this.getData()
  }
};
</script>
<style scoped>
.list {
  margin: 0 auto;
  width: 70%;
}
h2 {
  padding: 10px 0;
  margin: 10px 0;
  font-size: 28px;
  color: #2e6da4;
  border-bottom: 3px solid #2e6da4;
}
.top {
  padding: 0 0 10px;
  margin: 0 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.notice {
  padding: 0 10px;
  width: 130px;
}
h3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.notice-content {
  margin: 10px 0;
  color: #555;
}
.swiper {
  position: relative;  
  width: 400px;
}
.swiper img{
  width: 400px;
  height: 250px;
}
.swiper-title{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background:rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 5px 0;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item{
  padding:10px 0;
  border-bottom:1px solid #ddd;
  height: 125px;
  width: 430px;
  box-sizing: border-box;
}
.img{
  float: left;
  width: 150px;
  height: 80px;

}
.text{
  width: 230px;
  float: right;
}
i{
  color:#2e6da4;
}
p{
  color:#999;
}
.page{
  margin: 40px 0 20px;
  text-align: center;
}
.icon-eye{
  font-size: 12px;
}
.view{
  float: right;
}
</style>
