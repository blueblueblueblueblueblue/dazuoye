<template>
  <el-row>
    <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>用车管理</b></el-breadcrumb-item>

        <el-breadcrumb-item>待安排用车</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    </el-row>
    <el-row style="margin: 20px">
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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="open1();handleEdit(scope.$index, scope.row)">安排</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="open2()">不安排</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
          title="申请安排"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          车辆
          <hr>
          <el-radio style="margin: 10px" v-for="(item) in itemsAvalible" :key="item.vehnum"  v-model="radio1" :label="item.vehnum" border></el-radio>
          <br>
          司机
          <hr>
          <el-radio style="margin: 10px" v-for="(item) in itemsDriver" :key="item.vehnum"  v-model="radio2" :label="item.name" border></el-radio>
          <br>
          <div style="margin-left: 100px;margin-top: 20px">
          <el-button type="success" @click="arrange" >确认</el-button>
          <el-button type="info" @click="close1" >取消</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row style="margin: 20px">
      <el-col :span="24">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="外出车辆" name="first" style="margin: 10px">
            <el-checkbox v-for="(item,index) in items" :key="index" v-model="item.val" :label="item.vehnum" border></el-checkbox>
            <br>
            <el-button type="success" style="margin-top: 50px">确认回库</el-button>
          </el-tab-pane>
          <el-tab-pane label="限行车辆" name="second">

          </el-tab-pane>
          <el-tab-pane label="应急车辆" name="third">

          </el-tab-pane>
          <el-tab-pane label="领导车辆" name="fourth">

          </el-tab-pane>
        </el-tabs>
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
        name: "Waitedarr",
      data(){
        return{
          radio2:'',
          radio1:'',
          items:[],
          itemsAvalible:[],
          itemsDriver:[],
          activeName2: 'first',
          tableData: [],
          currentRow:null,
          dialogVisible:false,
          pagecount:0,
          currentpage:1,
          sqid:'',
          kssj:'',
          jssj:'',
        }
      },
      mounted:function(){
        this.handlePageSearch(1,10);
      },
      methods:{
        handleChangepage(val) {
          console.log(`当前页: ${val}`);
          this.currentpage = val;
          console.log("dangqianye",this.currentpage);
          this.handlePageSearch(this.currentpage,10);
        },
        handlePageSearch(currentpage,limit){
          let param = new URLSearchParams();
          param.append("currentpage", currentpage);
          param.append("limit", limit);
          this.$ajax.post('/waitedArrInfo',param).then((res)=>{
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
          console.log(index);
          this.sqid = this.tableData[index].sqid;
          this.kssj = this.tableData[index].ycsj;
          this.jssj = this.tableData[index].fhsj;
          this.$ajax.post('/apList').then((res)=>{
            if (res.data.status) {
              this.itemsAvalible = res.data.vehlist;
              this.itemsDriver = res.data.driverlist;
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
        handleClick(tab, event) {
          console.log(tab, event);
        },
        open1(){
          this.dialogVisible  = true;
        },
        close1(){
          this.dialogVisible = false;
        },
        arrange(){
          let param = new URLSearchParams();
          param.append("sqid",this.sqid);
          param.append("kssj",this.kssj);
          param.append("jssj",this.jssj);
          param.append("vehnum",this.radio1);
          param.append("driver",this.radio2);
          this.$ajax.post('/arrange',param).then((res)=>{
            if (res.data.status) {
              this.$message({
                type: 'success',
                message: '已安排!'
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
        }
      }
    }
</script>

<style scoped>

</style>
