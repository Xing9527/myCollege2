<template>
  <div class="box">
      <h1>我想大声告诉你</h1>
      <div class="text">
          <p class="to">{{pageData.to}}：</p>
          <div class="content" v-html="pageData.content">
          </div>
          <p class="from">{{pageData.from}}</p>
      </div>
      <div class="container">
        <ul>
            <li v-for="item in pageData.imgs" :key="item._id"><img :src="item" alt=""></li>                   
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          pageData:{
              to:"",
              from:"",
              content:"",
              imgs:[]
          }
      }
  },
  methods:{
      getData() {
          this.$axios.get('sayOpenOne').then(res => {
              if(res.data != null) {
                  this.pageData = res.data
              }
          })
      }
  },
  created() {
      this.getData()
  }
}
</script>
<style scoped>
.box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
}
h1{
    padding:50px 0 0 ;
    color: #fff;
    text-align: center;
    font-size: 32px;
}
.text{
    margin: 40px auto 0;
    width: 60%;
    color: #fff;
}
.to{
    font-size: 24px;    
}
.from{
    font-size: 24px;    
    text-align: right;    
}
.content{
    margin: 20px auto;
    padding: 10px 20px;
    width: 70%;
    height: 150px;
    border: 1px solid #888;
}
li {
    list-style: none;
    float: left;
}
li img{
    width: 300px;
    height: 200px;
}
ul {
    width: 2000px;
}
.container {
    overflow: hidden;
    width: 500px;
    margin: 20px auto 0;
}
.container:hover ul {
    animation-play-state: paused;
}
.container:hover ul li{
    opacity: .6;
}
.container ul li:hover {
    opacity: 1;
}
@keyframes myanimate{
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-1200px);
    }
}

.container ul {
    animation-name: myanimate;
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>
