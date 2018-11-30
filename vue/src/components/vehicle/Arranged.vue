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
            prop="status"
            label="状态"
            width="40">
            <template slot-scope="scope">
              <i class="el-icon-success " v-if="scope.row.status=='1'"></i>
              <i class="el-icon-info" v-else-if="scope.row.status=='2'"></i>
              <i class="el-icon-error" v-else></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="用车时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="person"
            label="用车人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="reason"
            label="用车事由"
            width="180">
          </el-table-column>
          <el-table-column
            prop="peoplenum"
            label="人数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="dest"
            label="目的地"
            width="180">
          </el-table-column>
          <el-table-column
            prop="isneed"
            label="需要司机"
            width="180">
          </el-table-column>
          <el-table-column
            prop="spr"
            label="处室审批人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="arrstatus"
            label="安排情况">

          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Arranged",
      data(){
        return{
          tableData: [{
            vehnum: '123456',
            versionnum: '奔驰',
            baorecord: '10',
            weirecord: '23',
            shirecord: '18',
            fixrecord: '16',
          }, {
            vehnum: '456789',
            versionnum: '五菱宏光',
            baorecord: '12',
            weirecord: '23',
            shirecord: '18',
            fixrecord: '16',
          }, {
            vehnum: '456132',
            versionnum: 'jeep',
            baorecord: '23',
            weirecord: '23',
            shirecord: '18',
            fixrecord: '16',
          }, {
            vehnum: '132456',
            versionnum: 'BMW',
            baorecord: '23',
            weirecord: '23',
            shirecord: '18',
            fixrecord: '16',
          }],
          currentRow:null,
        }
      }
    }
</script>

<style scoped>

</style>
