<template>
  <div class="index">
       <SideBar></SideBar>
       <Header></Header>
       <router-view></router-view>
  </div>
</template>
<script>
import SideBar from "./components/sideBar"
import Header from "./components/header"
export default {
  components:{
    SideBar,
    Header
  }
}
</script>
<style scoped>
.index{
  
  /* height: 635px; */
}
</style>
