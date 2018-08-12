<template>
  <div class="box">
    <el-table :data="tableData"  border style="width: 100%">
      <el-table-column prop="title" label="新闻标题" width="200">
        <!-- <template slot-scope="scope"></template> -->
      </el-table-column>
      <el-table-column label="新闻头图" width="250">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="max-height:100px;">
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="200">
      </el-table-column>
      <el-table-column prop="from" label="新闻来源" width="150">
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row._id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row._id)">删除</el-button>
          <el-button size="mini" type="info" @click="swiper(scope.row._id,scope.row.title,scope.row.img)">生成轮播图</el-button> 
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="生成轮播图" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input v-model="formData.sort" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="路径" :label-width="formLabelWidth">
          <el-input v-model="formData.path" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="type" :label-width="formLabelWidth">
          <el-select v-model="formData.type" placeholder="请选择轮播图分类">
            <el-option label="首页" value="1"></el-option>
            <el-option label="新闻页" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSwiper">确 定</el-button>
      </div>
    </el-dialog>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="50" @current-change="getPageData">
        </el-pagination>
    </div>
  </div>
</template>
<script>
import uploadImg from "@/view/admin/components/uploadImg"
export default {
  data() {
    return {
      tableData:[],
      formData: {
          title: '',
          img:'',
          type:null,
          sort:0,
          path:'',
          from:'新闻类'
        },
        dialogFormVisible: false,
        formLabelWidth: '120px'
    }
  },
  methods:{
    getData() {
      this.$axios.get('getNews',{pn:this.$route.query.pn}).then(res => {
        for(var i=0;i<res.data.length;i++) {
                res.data[i].createTime = this.timeTrans(res.data[i].createTime)
            }
        this.tableData = res.data;
        // console.log(res.data)
      })
    },
    timeTrans(UTCDateString) {
          if(!UTCDateString){
            return '-';
          }
          function formatFunc(str) {    //格式化显示
            return str > 9 ? str : '0' + str
          }
            var date2 = new Date(UTCDateString);     //这步是关键
            var year = date2.getFullYear();
            var mon = formatFunc(date2.getMonth() + 1);
            var day = formatFunc(date2.getDate());
            var hour = date2.getHours();
            var noon = hour >= 12 ? 'PM' : 'AM';
            hour = hour>=12?hour-12:hour;
            hour = formatFunc(hour);
            var min = formatFunc(date2.getMinutes());
            var dateStr = year+'-'+mon+'-'+day+' '+noon +' '+hour+':'+min;
            return dateStr;
    },
    getPageData(pn){
        //   console.log(pn)
        this.$router.push({path:"/admin/news/list",query:{pn}})
        this.getData()
    },
    del(id){
      this.$confirm('是否删除这条新闻?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('delNews',{id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            setTimeout(() => {
              this.$router.go(0)
            },1000)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    edit(id) {
      this.$router.push({path:"/admin/news/update",query:{id}})
    },
    swiper(id,title,img) {
      this.dialogFormVisible = true;
      this.formData.title = title;
      this.formData.path = "/news/detail?id=" + id;
      this.formData.img = img;
    },
    addSwiper() {
      this.dialogFormVisible = false;
      this.$axios.post('addSwiper',this.formData).then(res => {
        // console.log(res)
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
        setTimeout(() => {
          if(this.formData.type == 1){
            this.$router.push('/admin/swiper/home?type=1')
          }else{
            this.$router.push('/admin/swiper/news?type=2')            
          }
        },1000)
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
    padding: 90px 10px 80px 250px;
}
.page{
    position:fixed;
    bottom: 20px;
    left:0;
    right:0;
    text-align: center;
}
</style>
