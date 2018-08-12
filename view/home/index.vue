<template>
  <div class="index">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
    <a href="#top" class="go-top"><i class="iconfont icon-top1"></i></a>
  </div>
</template>

<script>
import MyHeader from "@/view/home/components/header"
import MyFooter from "@/view/home/components/footer"
export default {
  name: 'index',
  components:{
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>
.go-top{
  position: fixed;
  right: 5px;
  top: 70%;
  width: 40px;
  height: 40px;
  border:1px solid #ccc;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
}
.icon-top1{
  font-size:25px;
  color:#ccc;
}
</style>