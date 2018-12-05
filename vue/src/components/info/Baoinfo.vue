<template>
  <el-row>
    <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>信息管理</b></el-breadcrumb-item>

        <el-breadcrumb-item>保养信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column
            prop="vehnum"
            label="车牌号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="baotype"
            label="保养类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cost"
            label="花费"
            width="180">
          </el-table-column>
          <el-table-column
            prop="supplier"
            label="供应商"
            width="180">
          </el-table-column>
          <el-table-column
            prop="保养项目"
            label="目的地"
            width="180">
          </el-table-column>
          <el-table-column
            prop="travel"
            label="里程"
            width="180">
          </el-table-column>
          <el-table-column
            prop="baodate"
            label="保养时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="reamrks"
            label="备注"
            width="40">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Baoinfo",
      data(){
          return{
            tableData: [],
          }
      },
      mounted:function () {
        var vehnum = this.$route.query.vehnum;
        console.log("vehnum:"+vehnum);
        let params = new URLSearchParams();
        params.append("vehnum",vehnum);
        this.$ajax.post('/baoInfo',params).then((res)=>{
          if (res.data.status) {
            console.log("lyx"+res.data);
            this.tableData = res.data.baolist;
          } else {
            console.log(res.data.status)
            this.$message({
              type: 'error',
              message: '参数错误',
              showClose: true
            })
          }
        }).catch((err) => {
          this.$message({
            type: 'error',
            message: '网络错误，请重试',
            showClose: true
          })
        })
      }
    }
</script>

<style scoped>

</style>
