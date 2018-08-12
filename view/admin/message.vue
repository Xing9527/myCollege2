<template>
  <div class="msg">
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column  prop="createTime"  label="时间"  width="180">
        </el-table-column>
        <el-table-column  prop="author"  label="作者"  width="180">
        </el-table-column>
        <el-table-column  prop="msg"  label="留言">
        </el-table-column>
        <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-button size="mini" type="danger"
                @click="del(scope.row._id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="100" @current-change="getPageData">
        </el-pagination>
    </div>
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
      getMsg() {
          this.$axios.get('getMsg',{pn:this.$route.query.pn}).then(res => {
            //   console.log(res)
            for(var i=0;i<res.data.length;i++) {
                res.data[i].createTime = this.timeTrans(res.data[i].createTime)
            }
            this.tableData = res.data            
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
        this.$router.push({path:"/admin/msg",query:{pn}})
        this.getMsg()
      },
      del(id) {
          this.$confirm('是否删除此条留言?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.$axios.post('delMsg',{id}).then(res => {
                  if(res.ret) {
                      this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });
                      setTimeout(() => {
                          this.$router.go(0)
                      },1000)
                  }else{
                      this.$message({
                        type: 'info',
                        message: '删除失败!'
                      });  
                  }
              })
          }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除!'
            });          
          });
      }
  },
  created() {
      this.getMsg()
  }
}
</script>
<style scoped>
.msg{
    padding: 90px 20px 20px 250px;
}
.page{
    position:fixed;
    bottom: 20px;
    left:0;
    right:0;
    text-align: center;
}
</style>
