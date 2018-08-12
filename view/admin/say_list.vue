<template>
  <div class="box">
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="from" label="委托人" width="130">
        </el-table-column>
        <el-table-column prop="to" label="受收人" width="130">
        </el-table-column>
        <el-table-column label="状态" width="150">
          <template slot-scope="scope">
            <el-button @click="close(scope.row._id)" size="mini" type="success" plain v-if="scope.row.status == 1">启用</el-button> 
            <el-button @click="open(scope.row._id)" size="mini" type="danger" plain v-if="scope.row.status == 0">禁用</el-button> 
          </template>         
        </el-table-column>
        <el-table-column prop="contentTxt" label="内容" width="275">
        </el-table-column>
        <el-table-column prop="time" label="开启时间" width="210">
        </el-table-column>
        <el-table-column label="操作" width="200">
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
      this.$axios.get('sayGet').then(res => {
        if(res.ret) {
          this.tableData = res.data
        }
      })
    },
    open(id) {
      this.$axios.post('sayOpen',{id}).then(res => {
        if(res.data == "已有一个项目开启，请先关闭") {
          this.$message({
              message: '已有一个项目开启，请先关闭!',
              type: 'warning'
          });
        }else if(res.ret) {
          this.getData()
        }
      })
    },
    close(id) {
      this.$axios.post('sayClose',{id}).then(res => {
        if(res.ret) {
          this.getData()
        }
      })
    },
    del(id) {
      this.$confirm('是否删除这条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        this.$axios.post('sayDel',{id}).then(res => {
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
      this.$router.push({path:'/admin/say/update',query:{id}})
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style>
.el-table .cell{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

<style scoped>
.box{
    padding: 90px 20px 20px 250px;
}
</style>
