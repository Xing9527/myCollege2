<template>
  <div class="message">
      <h2>站内留言</h2>
      <p class="notice">您可以在这里留下对网站的宝贵意见，也可以在这里和其他的来访者互动留言！</p>
      <div class="show-message">
          <ul>
              <li class="container" v-for="item in msgList" :key="item._id">
                  <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2237568080,2426216088&fm=27&gp=0.jpg" alt="">
                  <div class="item">
                      <h4>{{item.author}}</h4>
                      <p><i class="iconfont icon-time"></i>  {{item.createTime}}</p>
                  </div>
                  <p class="content">{{item.msg}}</p>
              </li>
          </ul>
      </div>
      <div class="save-message">
          <el-form ref="form" :model="formData" label-width="70px">
              <el-form-item label="作者">
                  <el-input  v-model="formData.author"></el-input>
              </el-form-item>
              <el-form-item label="内容" >
                  <el-input type="textarea" v-model="formData.msg"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button size="small" @click="message">留言</el-button>
              </el-form-item>
          </el-form>
      </div>
      <div class="page">
          <el-pagination background layout="prev, pager, next" :total="100" @current-change="getPageData">
          </el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          formData:{
              author:"",
              msg:""
          },
          msgList:[]
      }
  },
  methods:{
      getMsg() {
          this.$axios.get('getMsg',{pn:this.$route.query.pn}).then(res => {
            //   console.log(res)
            for(var i=0;i<res.data.length;i++) {
                res.data[i].createTime = this.timeTrans(res.data[i].createTime)
            }
            this.msgList = res.data            
          })
      },
      message() {
          this.$axios.post('addMsg',this.formData).then(res => {
            //   console.log(res)
            this.$message({
                message: '留言成功！',
                type: 'success'
            });
            setTimeout(() => {
                this.$router.go(0)
            },1000)
          })
      },
      timeTrans(UTCDateString) {
          if(!UTCDateString){
            return '-';
          }
          function formatFunc(str) {    //格式化显示
            return str > 9 ? str : '0' + str
          }
            var date2 = new Date(UTCDateString);     //这步是关键
            var year = date2.getFullYear();
            var mon = formatFunc(date2.getMonth() + 1);
            var day = formatFunc(date2.getDate());
            var hour = date2.getHours();
            var noon = hour >= 12 ? 'PM' : 'AM';
            hour = hour>=12?hour-12:hour;
            hour = formatFunc(hour);
            var min = formatFunc(date2.getMinutes());
            var dateStr = year+'-'+mon+'-'+day+' '+noon +' '+hour+':'+min;
            return dateStr;
      },
      getPageData(pn){
        //   console.log(pn)
        this.$router.push({path:"/message",query:{pn}})
        this.getMsg()
      }
  },
  created() {
      this.getMsg()
  }
}
</script>
<style scoped>
.message{
    width: 1020px;
    margin: 0 auto;
}
h2{
    margin: 10px 0;
    font-size:22px;
    text-align: center;
    color:#2e6da4;
}
.notice{
    text-align: center;
    border-bottom: 1px solid #2e6da4;
}
.show-message{
    float: left;
    padding-right:20px;
    border-right:1px solid #2e6da4;
}
.container{
    padding: 5px 30px;
    margin: 15px 0;
    box-sizing: border-box;
    width: 600px;
    /* height: 90px; */
    border-top:1px solid #bbb;
    border-bottom:1px solid #bbb;
    background: #f1f1f1;
}
.container img{
    float: left;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
h4{
    font-size:14px;
    font-weight: 700;
}
.icon-time{
    font-size:12px;
}
.item p{
    color:#666;
}
.content{
    margin: 10px 0 0 10px;
    text-indent: 2em;
}

.save-message{
    float: right;
    padding:30px 10px;
    width: 370px;
}
.page{
    padding: 50px 0 20px;
    clear: both;
    text-align: center;
}
</style>
