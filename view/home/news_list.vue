<template>
  <div class="more">
      <h2>News</h2>
      <ul>
        <li class="swiper1">
          <el-carousel :interval="5000" arrow="always" height="125px">
            <el-carousel-item v-for="item in swiperList" :key="item._id">
              <router-link :to="'/news/detail?id='+item._id">
                  <img :src="item.img" alt="">
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </li>
        <li class="news" v-for="item in newsList" :key="item._id">
          <div class="img">
            <router-link :to="'/news/detail?id='+item._id"><img :src="item.img" alt=""></router-link>
          </div>
          <div class="text">
            <p>
              <i class="iconfont icon-time"></i> {{item.createTime}} 
              <span class="view"><i class="iconfont icon-eye"></i> {{item.view}}</span>
            </p>
            <h3><router-link :to="'/news/detail?id='+item._id">{{item.title}}</router-link></h3>
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
      newsList:[]
    }
  },
  methods:{
    getSwiper() {
      this.$axios.get('getSwiper',{type:2}).then(res => {
        this.swiperList = res.data
      })
    },
    getNews() {
      this.$axios.get('getNews',{pn:this.$route.query.pn}).then(res => {
        for(var i=0;i<res.data.length;i++){
          res.data[i].createTime = timeTrans(res.data[i].createTime).substr(0,10);
          res.data[i].contentText = res.data[i].contentText.substr(0,30) + "..."
        }
        this.newsList = res.data
      })
    },
    getPageData(pn){
        //   console.log(pn)
        this.$router.push({path:"/news",query:{pn}})
        this.getNews()
    },
  },
  created() {
    this.getSwiper();
    this.getNews()
  }
}
</script>
<style scoped>
.more{
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
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
li{
  height: 125px;
  width: 430px;
  box-sizing: border-box;

}
.news{
  padding:10px 0;
  border-bottom:1px solid #ddd;
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
.view{
  float: right;
}
.icon-eye{
  font-size: 12px;
}
</style>
