<template>
  <div class="box">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="sort" label="排序"  width="120">
        </el-table-column>
        <el-table-column  prop="from" label="分类" width="150">
        </el-table-column>
        <el-table-column  prop="title" label="标题" width="300">
        </el-table-column>
        <el-table-column label="图片" width="300">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" style="max-height:100px;">
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.row._id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData:[]
    }
  },
  methods:{
    getData() {
      this.$axios.get('getSwiper',{type:this.$route.query.type}).then(res => {
        this.tableData = res.data
      })
    },
    del(id) {
      this.$confirm('是否删除这个轮播图?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('delSwiper',{id}).then(res => {
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
      this.$router.push({path:'/admin/swiper/update',query:{id}})
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style scoped>
.box{
    padding: 90px 20px 20px 250px;
}
</style>
