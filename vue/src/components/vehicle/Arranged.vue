<template>
  <el-row>
    <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>用车管理</b></el-breadcrumb-item>

        <el-breadcrumb-item>已安排用车</el-breadcrumb-item>
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
            prop="apstatus"
            label="状态"
            width="40">
            <template slot-scope="scope">
              <i class="el-icon-success " v-if="scope.row.apstatus=='1'"></i>
              <i class="el-icon-info" v-else-if="scope.row.apstatus=='2'"></i>
              <i class="el-icon-error" v-else></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="ycsj"
            label="用车时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ycr"
            label="用车人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ycsy"
            label="用车事由"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ycrs"
            label="人数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mdd"
            label="目的地"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sfxysj"
            label="需要司机"
            width="180">
          </el-table-column>
          <el-table-column
            prop="spr"
            label="处室审批人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="spstatus"
            label="状态"
            width="40">
            <template slot-scope="scope">
              <span v-if="scope.row.spstatus=='1'">通过</span>
              <span v-else-if="scope.row.spstatus=='2'">不通过</span>

            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-left: 100px">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="pagecount"
          @current-change="handleChangepage">
        </el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Arranged",
      data(){
        return{
          tableData: [],
          currentRow:null,
          pagecount:0,
          currentpage:1,
        }
      },
      mounted:function(){
        this.handlePageSearch(1,10);
      },
      methods:{
        handlePageSearch(currentpage,limit){
          let param = new URLSearchParams();
          param.append("currentpage", currentpage);
          param.append("limit", limit);
          this.$ajax.post('/arrangedInfo',param).then((res)=>{
            if (res.data.status) {
              console.log(res.data),
                this.tableData = res.data.ycsqlist;
              this.pagecount = res.data.pagecount;
              console.log("this.pagecount"+this.pagecount)

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
        },
        handleCurrentChange(val) {
          this.currentRow = val;
        },
        handleEdit(index, row) {
          var sqid = this.tableData[index].sqid;
          let param = new URLSearchParams();
          param.append("sqid",sqid);
          this.$ajax.post('/spTy',param).then((res)=>{
            if (res.data.status) {
              this.$message({
                type: 'success',
                message: '已同意!'
              });
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
        },
        handleDelete(index, row) {
          var sqid = this.tableData[index].sqid;
          let param = new URLSearchParams();
          param.append("sqid",sqid);
          this.$ajax.post('/spNty',param).then((res)=>{
            if (res.data.status) {
              this.$message({
                type: 'success',
                message: '已驳回!'
              });
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
        },
      }
    }
</script>

<style scoped>

</style>
