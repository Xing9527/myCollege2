<template>
  <div class="box">
      <el-form ref="form" :model="formData" label-width="80px">
          <el-form-item label="新闻标题">
              <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="作者">
              <el-input v-model="formData.author"></el-input>
          </el-form-item>
          <el-form-item label="新闻来源">
              <el-input v-model="formData.from"></el-input>
          </el-form-item>
          <el-form-item label="新闻头图"  >
              <uploadImg v-model="formData.img"></uploadImg>
          </el-form-item>
          <el-form-item label="主体内容">
              <Editor v-model="formData.content" @getTxt="getText"></Editor>
          </el-form-item>
          <el-form-item>
              <el-button v-if="$route.name == '新闻添加'" @click="upData">添加</el-button>
              <el-button v-if="$route.name == '新闻修改'" @click="update">保存修改</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
import uploadImg from "@/view/admin/components/uploadImg";
import Editor from "@/view/admin/components/editor";
export default {
  data() {
    return {
      formData: {
        title: "",
        img: "",
        content: "",
        contentText: "",
        author:"",
        from:"",
        id:""
      }
    }
  },
  components:{
    uploadImg,
    Editor
  },
  methods: {
    getText(val) {
      this.formData.contentText = val;
    },
    upData() {
      this.$axios.post("addNews", this.formData).then(res => {
        // console.log(res.data)
        if (res.ret) {
          this.$message({
            message: '恭喜你，添加成功',
            type: 'success'
          });
          setTimeout(() => {
            this.$router.push('/admin/news/list?pn=1')
          },1000)
        }else{
          this.$message.error('添加新闻出错！！！');
        }
      });
    },
    update() {
      this.formData.id = this.$route.query.id;
      this.$axios.post("updateNews", this.formData).then(res => {
        if (res.ret) {
          this.$message({
            message: '恭喜你，修改成功',
            type: 'success'
          });
          setTimeout(() => {
            this.$router.push('/admin/news/list?pn=1')
          },1000)
        }else{
          this.$message.error('修改新闻出错！！！');
        }
      });
    },
    
  },
  created() {
    if (this.$route.name == "新闻修改") {
      this.$axios.get("getNews",{id:this.$route.query.id}).then(res => {
        this.formData = res.data;
        // console.log(res.data)
      });
    }
  },
  watch: {
    $route(to, from, next) {
      if (to.name == "新闻添加") {
        this.formData = {
          title: "",
          img: "",
          content: "",
          contentText: "",
          author: "",
          from:""
        };
      }
    }
  }
}
</script>
<style scoped>
.box{
    padding: 90px 20px 20px 250px;
}
</style>
