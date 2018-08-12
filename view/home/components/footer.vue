<template>
  <div class="footer clear">
      <div class="top">
          <ul>
              <li>
                  <p>
                      <router-link to="/news?pn=1">校园新闻</router-link>
                      <router-link to="/jobs?pn=1">招生就业</router-link>
                  </p>
                  <p>
                      <router-link to="/official/beijing">高校官网</router-link>
                      <router-link to="/message?pn=1">站内留言</router-link>
                  </p>
              </li>
              <li>
                  <router-link to="/">
                      <h1>
                            <i class="iconfont icon-icon-traces-msg-manager"></i>
                            高校信息
                      </h1>
                  </router-link>
              </li>
              <li>
                  <p>
                      <router-link to="/news?pn=1">校园新闻</router-link>
                      <router-link to="/jobs?pn=1">招生就业</router-link>
                  </p>
                  <p>
                      <router-link to="/official/beijing">高校官网</router-link>
                      <router-link to="/message?pn=1">站内留言</router-link>
                  </p>
              </li>
          </ul>
      </div>
      <div class="bottom">
          <span>版权所有©xingshize</span>
          <span>|</span>
          <span>邮箱：929885647@qq.com</span>
          <span>|</span>
          <span>用于毕业设计</span>
          <span>|</span>
          <span>高校信息平台</span>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.top{
    padding: 10px 0;    
    box-sizing: border-box;
    height: 100px;
    background:url(../../.././imgs/header-bg2.jpg);
}
.top ul{
    width: 970px;
    margin: 0 auto;
}
.top li{
    float: left;
    width: 320px;
    height:80px;
    border-left: 1px solid rgb(122, 92, 81);
    border-right: 1px solid rgb(122, 92, 81);
    text-align: center;
}
.top li:nth-of-type(2){
    border:none;
}
.top h1{
    margin: 0 auto;
    width: 210px;
    font-size: 40px;
    color: #2e6da4;
    font-family: "华文隶书";
    line-height: 80px;    
}
.top h1 i{
    font-size:33px;
}
.bottom{
    padding: 5px 0;
    background: rgb(0,0,0);
    text-align: center;
}
span{
    margin: 0 5px;
    color: #eee;
}
.top li:nth-of-type(1){
    /* padding: 20px 0; */
    box-sizing: border-box;
}
.top li:nth-of-type(3){
    /* padding: 20px 0; */
    box-sizing: border-box;
}
p{
    margin: 15px 0;
}
p a{
    margin: 0 20px;
    font-size:14px;
}
</style>
