<template>
  <div class="side-bar">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>新闻</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/news/list?pn=1">新闻列表</el-menu-item>
            <el-menu-item index="/admin/news/add">新闻添加</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>招生就业</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/jobs/list?pn=1">招就列表</el-menu-item>
            <el-menu-item index="/admin/jobs/add">招就添加</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页轮播图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/swiper/home?type=1">轮播图列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>新闻页轮播图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/swiper/news?type=2">轮播图列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>招就页轮播图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/swiper/jobs?type=3">轮播图列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="rgba(255,255,255,0)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>留言</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/msg?pn=1">留言列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="rgba(255,255,255,0)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>大声说出来</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/say/list">大声说列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/admin/say/add">大声说添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  
};
</script>
<style>
.el-menu{
    border-right: none;
}
.el-menu:hover{
  background: rgba(0,0,0,.5);
}
</style>

<style scoped>
.side-bar{
    position: fixed;
    left:0;
    top: 70px;
    bottom:0;
    width: 230px;
    /* background: #EEE1CE; */
    box-sizing: border-box;
    background: url(../../../imgs/admin-bg.jpg) ;
    background-size: 100% 100%;
}
</style>
