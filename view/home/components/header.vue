<template>
  <div>
      <div class="header">
        <div class="table-bar clear">
            <div class="table-bar-left">
                <router-link to="/jobs?pn=1">招聘</router-link>
                <router-link to="">捐赠</router-link>
            </div>
            <div class="table-bar-right">
                <router-link to="/message?pn=1">留言</router-link>
                <router-link to="/admin">后台管理</router-link>
            </div>
        </div>
        <router-link to="/">
            <h1>
                <i class="iconfont icon-icon-traces-msg-manager"></i>
                高校信息
            </h1>
        </router-link>
    </div>
    <div class="content">
        <ul class="nav">
            <li><router-link to="/news?pn=1">新闻列表</router-link></li>
            <li><router-link to="/jobs?pn=1">招生就业</router-link></li>
            <li><router-link to="/official/beijing">高校官网</router-link></li>
            <li><router-link to="/message?pn=1">网站留言</router-link></li>
            <li><router-link to="/admin">后台管理</router-link></li>
            <li><router-link to="/home/say">大声告诉你</router-link></li>
            <li><router-link to="">未完待续</router-link></li>
        </ul>
    </div> 
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
/*头部设置*/
.header{
    width: 100%;
    height: 120px;
    background: url(../../.././imgs/header-bg.jpg) no-repeat left;
}
/*头部导航设置*/
.table-bar{
    padding: 5px 40px;
    background-color: rgba(0,0,0,.7);
}
.table-bar a{
    margin-right: 10px;
    color:#eee;
    font-size: 14px;
}
.table-bar a:hover{
    color:#fff;
}
.table-bar-left{
    float: left;
}
.table-bar-right{
    float: right;
}
/*logo设置*/
.header h1{
    margin: 35px;
    width: 260px;
    font-size: 50px;
    color: #2e6da4;
    font-family: "华文隶书";
}
.header h1 i{
    font-size:40px;
}

/*主体导航*/
.nav{
    margin: 0 auto;
    width: 1020px;     
    height: 43px;
}
.nav li{
    float: left;
    margin: 0 10px;
}
.nav li a{
    display: block;
    width: 125px;
    height: 43px;
    text-align: center;
    line-height: 43px;
    font-size:16px;
}

</style>
