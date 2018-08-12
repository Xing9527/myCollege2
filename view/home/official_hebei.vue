<template>
  <div class="official">
      <h2>Official website entrance</h2>
      <Address></Address>
      <router-view></router-view>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.ncst.edu.cn/">
                  <img src="../.././imgs/icon11.jpg" alt="">
                  <h3>华北理工大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hebtu.edu.cn/">
                  <img src="../.././imgs/icon12.jpg" alt="">
                  <h3>河北师范大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hbu.edu.cn/">
                  <img src="../.././imgs/icon13.jpg" alt="">
                  <h3>河北大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hebeu.edu.cn/">
                  <img src="../.././imgs/icon14.jpg" alt="">
                  <h3>河北工程大学</h3>
              </a>   
          </div>
      </div>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.hebut.edu.cn/">
                  <img src="../.././imgs/icon15.jpg" alt="">
                  <h3>河北工业大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hgu.edu.cn/">
                  <img src="../.././imgs/icon16.jpg" alt="">
                  <h3>河北地质大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.ncst.edu.cn/">
                  <img src="../.././imgs/icon11.jpg" alt="">
                  <h3>华北理工大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hebtu.edu.cn/">
                  <img src="../.././imgs/icon12.jpg" alt="">
                  <h3>河北师范大学</h3>
              </a>   
          </div>
      </div>
      <div class="container">
          <div class="item">
              <a target="_blank" href="http://www.hbu.edu.cn/">
                  <img src="../.././imgs/icon13.jpg" alt="">
                  <h3>河北大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hebeu.edu.cn/">
                  <img src="../.././imgs/icon14.jpg" alt="">
                  <h3>河北工程大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hebut.edu.cn/">
                  <img src="../.././imgs/icon15.jpg" alt="">
                  <h3>河北工业大学</h3>
              </a>   
          </div>
          <div class="item">
              <a target="_blank" href="http://www.hgu.edu.cn/">
                  <img src="../.././imgs/icon16.jpg" alt="">
                  <h3>河北地质大学</h3>
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
