<template>
  <div class="box">
      <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="委">
                <el-input v-model="formData.from"></el-input>
            </el-form-item>
            <el-form-item label="受">
                <el-input v-model="formData.to"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <Editor v-model="formData.content" @getTxt="getTxt"></Editor>  
            </el-form-item>
            <el-form-item label="图片(四张)">
                <el-upload
                    action="https://upload-z1.qiniup.com"
                    list-type="picture-card"
                    :on-success="success"
                    :data="{token:token}"
                    >
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="开启时间">
                <el-input v-model="formData.time"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button v-if="$route.name == '大声说添加'" @click="upload">提交</el-button>
                <el-button v-if="$route.name == '大声说修改'" @click="update">保存修改</el-button>
            </el-form-item>
      </el-form>
  </div>
</template>
<script>
import Editor from "@/view/admin/components/editor"
export default {
    data() {
        return {
            formData:{
                to:"",
                from:"",
                content:"",
                contentTxt:"",
                imgs:[],
                time:"",
                id:""
            },
            token:""
        }
    },
    components:{
        Editor
    },
    methods:{
        getTxt(val) {
            this.formData.contentTxt = val
        },
        getToken() {
            this.$axios.get('qiniu').then(res => {
                this.token = res.data
            })
        },
        success(res) {
            // console.log(val)
            var url = "http://image.yaojunrong.com/" + res.key;
            this.formData.imgs.push(url)
        },
        upload() {
            this.$axios.post('sayAdd',this.formData).then(res => {
                if (res.ret) {
                    this.$message({
                        message: '恭喜你，添加成功!',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.$router.push('/admin/say/list')
                    },1000)
                }else{
                    this.$message.error('添加出错！！！');
                }
            })
        },
        update() {
            this.formData.id = this.$route.query.id;
            this.$axios.post("sayUpdate",this.formData).then(res => {
                if (res.ret) {
                    this.$message({
                        message: '恭喜你，修改成功!',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.$router.push('/admin/say/list')
                    },1000)
                }else{
                    this.$message.error('修改出错！！！');
                }
            })
        },
        getOneData() {
            this.$axios.get('sayGet',{id:this.$route.query.id}).then(res => {
                res.data[0].imgs = [];
                this.formData = res.data[0]
            })
        }
    },
    created() {
        this.getToken()
        if(this.$route.name == "大声说修改") {
            this.getOneData()
        }
    },
    watch:{
        $route(to,from,next) {
            if(to.name == "大声说添加") {
                this.formData = {
                    to:"",
                    from:"",
                    content:"",
                    contentTxt:"",
                    imgs:[],
                    time:""
                }
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
