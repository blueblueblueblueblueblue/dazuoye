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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="open1()">安排</el-button>
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

        </el-dialog>
      </el-col>
    </el-row>
    <el-row style="margin: 20px">
      <el-col :span="24">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="外出车辆" name="first" style="margin: 10px">
            <el-checkbox v-for="(item,index) in items" :key="index" v-model="item.val" :label="item.text" border></el-checkbox>
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
  </el-row>
</template>

<script>
    export default {
        name: "Waitedarr",
      data(){
        return{
          items:[{val:false,text:'晋D12'},
            {val:false,text:'晋D12'}
          ],
          activeName2: 'first',
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
          dialogVisible:false,
        }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        open1(){
          this.dialogVisible  = true;
        }
      }
    }
</script>

<style scoped>

</style>
