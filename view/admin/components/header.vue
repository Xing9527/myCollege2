<template>
  <div class="header">
      <router-link to="/admin">
            <h1>
                <i class="iconfont icon-icon-traces-msg-manager"></i>
                高校信息
            </h1>
            <div class="right"> 
              <a href="#" v-popover:popover class="img-header">
                <img src="../../../imgs/admin_img.jpg" alt="">
              </a>
              <el-popover ref="popover" placement="bottom" trigger="hover">
                <h3>管理员：{{username}}</h3>
                <div class="btn">
                  <el-button type="danger" size="mini" @click="logout">退出登录</el-button>                  
                </div>
              </el-popover>
            </div>
      </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:""
    }
  },
  methods:{
    logout() {
      this.$axios.get('adminLogout').then(res => {
        if(res.ret) {
          this.$message({
            showClose: true,
            message: '退出登录成功',
            type:'success'
          });
          setTimeout(() => {
            this.$router.push('/admin/login')
          },1000)
        }else{
          this.$message({
            showClose: true,
            message: '退出登录失败',
            type: 'error'
          });
        }
      })
    },
    isLogin() {
      this.$axios.get('adminIsLogin').then(res => {
        if(!res.ret){
          this.$router.push('/admin/login')
        }else{
          this.username = res.data          
        }
      })
    }
  },
  created() {
    this.isLogin()
  }
};
</script>
<style scoped>
h1{
  float: left;
  margin: 0 20px;
  font-size: 40px;
  font-family: "华文隶书";
  color: #fff;
}
.icon-icon-traces-msg-manager{
  font-size:35px;
}
.header{
    position: fixed;
    left:0px;
    top:0;
    right:0;
    padding: 10px 20px;
    border-bottom: 1px solid #aaa;
    /* background:#EEE1CE; */
    z-index: 999;
    height: 50px;
    line-height: 50px;
    background: url(../../../imgs/admin-bg.jpg) ;
    background-size: 100% 100%;
}
.right{
  float: right;
}
.img-header img{
  margin-right: 80px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
h3{
  margin: 10px 0;
  text-align: center;
}
.btn{
  margin: 30px 0;
  text-align: center;
}
</style>
