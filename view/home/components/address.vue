<template>
  <div class="address clear">
      <ul>
          <li><router-link to="/official/beijing" :class="{active:$route.name === '北京'}">北京</router-link></li>
          <li><router-link to="/official/hebei" :class="{active:$route.name === '河北'}">河北</router-link></li>
          <li><router-link to="">天津</router-link></li>
          <li><router-link to="">河南</router-link></li>
          <li><router-link to="">江苏</router-link></li>
          <li><router-link to="">浙江</router-link></li>
          <li><router-link to="">山东</router-link></li>
          <li><router-link to="">山西</router-link></li>
          <li><router-link to="">陕西</router-link></li>
          <li><router-link to="">湖北</router-link></li>
          <li><router-link to="">四川</router-link></li>
          <li><router-link to="">湖南</router-link></li>
          <li><router-link to="">海南</router-link></li>
          <li><router-link to="">黑龙江</router-link></li>
          <li><router-link to="">吉林</router-link></li>
          <li><router-link to="">辽宁</router-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.address{
  margin: 15px 0;
  /* height: 60px; */
}
li{
  float: left;
}
a{
  display: block;
  width: 80px;
  height: 30px;
  font-size: 16px;
  color:#2e6da4;
  text-align: center;
  line-height: 30px;
}
a:hover{
  color:#fff;
  background:#2e6da4;
}
.active{
  color:#fff;
  background:#2e6da4;
}
</style>
