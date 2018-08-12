<template>
  <div class="box">
      <el-form ref="form" :model="formData" label-width="80px">
          <el-form-item label="新闻标题">
              <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="新闻头图"  >
              <uploadImg v-model="formData.img"></uploadImg>
          </el-form-item>
          <el-form-item label="排序">
              <el-input v-model="formData.sort"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button  @click="update">保存修改</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
import uploadImg from "@/view/admin/components/uploadImg";
export default {
  data() {
    return {
      formData: {
        title: "",
        img: "",
        sort: null,
        type:null
      },
      path:""
    }
  },
  components:{
    uploadImg,
  },
  methods: {
    update() {
      this.formData.id = this.$route.query.id;
      this.$axios.post("updateSwiper", this.formData).then(res => {
        if (res.ret) {
          this.$message({
            message: '恭喜你，修改成功',
            type: 'success'
          });
          setTimeout(() => {
            if(this.formData.type == 1){
              this.path = "/admin/swiper/home?type=1"
            }else if(this.formData.type == 2){
              this.path = "/admin/swiper/news?type=2"        
            }else{
              this.path = "/admin/swiper/jobs?type=3"        
            }
            this.go(this.path)
          },1000)
        }else{
          this.$message.error('修改轮播图出错！！！');
        }
      });
    },
    go(path) {
      this.$router.push(path)
    }  
  },
  created() {
      this.$axios.get("getSwiper",{id:this.$route.query.id}).then(res => {
        this.formData = res.data[0];
      });
  },
  watch: {
    $route(to,from,next) {
      console.log(from,to)
      // if(from.name == "首页轮播图列表"){
      //   this.path = "/admin/swiper/home?type=1"
      // }
    }
  }
}
</script>
<style scoped>
.box{
    padding: 90px 20px 20px 250px;
}
</style>
