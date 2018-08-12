<template>
  <div class="official">
      <h2>Official website entrance</h2>
      <Address></Address>
      <router-view></router-view>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.tsinghua.edu.cn/publish/newthu/index.html">
                  <img src="../.././imgs/icon1.jpg" alt="">
                  <h3>清华大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.ruc.edu.cn/">
                  <img src="../.././imgs/icon2.jpg" alt="">
                  <h3>中国人民大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.ustc.edu.cn/">
                  <img src="../.././imgs/icon3.jpg" alt="">
                  <h3>中国科技大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.pku.edu.cn/">
                  <img src="../.././imgs/icon4.jpg" alt="">
                  <h3>北京大学</h3>
              </a>   
          </div>
      </div>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.njtu.edu.cn/">
                  <img src="../.././imgs/icon5.jpg" alt="">
                  <h3>北京交通大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.ustb.edu.cn/">
                  <img src="../.././imgs/icon6.jpg" alt="">
                  <h3>北京科技大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.buu.edu.cn/">
                  <img src="../.././imgs/icon7.jpg" alt="">
                  <h3>北京联合大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.bucea.edu.cn/">
                  <img src="../.././imgs/icon8.jpg" alt="">
                  <h3>北京建筑大学</h3>
              </a>   
          </div>
      </div>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.bjut.edu.cn/">
                  <img src="../.././imgs/icon9.jpg" alt="">
                  <h3>北京工业大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.bupt.edu.cn/">
                  <img src="../.././imgs/icon10.jpg" alt="">
                  <h3>北京邮电大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.bjut.edu.cn/">
                  <img src="../.././imgs/icon9.jpg" alt="">
                  <h3>北京工业大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.bupt.edu.cn/">
                  <img src="../.././imgs/icon10.jpg" alt="">
                  <h3>北京邮电大学</h3>
              </a>   
          </div>
      </div>
  </div>
</template>
<script>
import Address from '@/view/home/components/address'
export default {
  components:{
      Address
  }
}
</script>
<style scoped>
.official{
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
a{
    display: block;
    padding: 10px 0;
    box-sizing: border-box;
    width: 150px;
    height: 200px;
    text-align: center;
    border: 1px solid #ccc;
    color:#2e6da4;
    border-radius: 4px;
}
/* a:hover{
    color:#fff;
    background:rgba(46, 109, 164, .5);
} */
img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
h3{
    font-size:18px;
    margin-top: 15px;
}
.container{
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
