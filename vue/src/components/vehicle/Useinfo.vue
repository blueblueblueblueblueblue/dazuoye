<template>
  <el-row>
  <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>用车管理</b></el-breadcrumb-item>

        <el-breadcrumb-item>用车申请</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
    <el-row>
      <el-col :span="6" >
        查看用车申请日期：
        <el-date-picker
          v-model="value1"
          align="right"
          type="date"
          placeholder="选择日期"
         >
        </el-date-picker>
        </el-col>
      <el-col :span="4">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left" @click="lastday()">前一天</el-button>
          <el-button type="primary">后一天<i class="el-icon-arrow-right el-icon--right" @click="nextday"></i></el-button>
        </el-button-group>
      </el-col>
      <el-col :span="6">

      </el-col>
    </el-row>
    <el-row >
      <el-col :span="4">

      </el-col>
      <el-col :span="6" class="zongti">

        <el-table
          size="mini"
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column

            :label="usenum"
            width="120">
            <template slot-scope="scope" >
              <a href="#">{{scope.row.vehdif}}</a>
              <el-badge :value="scope.row.keyong" type="warning" />


            </template>
          </el-table-column>
          <el-table-column

            :label="appnum"
            width="120">
            <template slot-scope="scope" >
              <a href="#">{{scope.row.vehdif}}</a>
              <el-badge :value="scope.row.yianpai" type="danger" />


            </template>
          </el-table-column>
          <el-table-column

            :label="limitnum"
            width="120">
            <template slot-scope="scope" >
              <a href="#">{{scope.row.vehdif}}</a>
              <el-badge :value="scope.row.xianxing" type="info" />


            </template>
          </el-table-column>

        </el-table>

      </el-col>
      <el-col :span="4" class="app-btn">
        <i class="el-icon-success " ></i>：已安排<br>
        <i class="el-icon-info"></i>：待安排<br>
        <i class="el-icon-error"></i>：不安排<br><br>
        <el-button type="success" @click="apply()">申请用车</el-button>
        <el-dialog
          title="申请用车"
          :visible.sync="dialogVisible"
          width="50%"
          center>
          <el-form :model="ruleForm1" :rules="rules1" status-icon inline  ref="ruleForm1" label-width="140px" size="small" class="demo-ruleForm">
            <el-form-item label="用车处室" prop="vennum">
              <el-input v-model="ruleForm1.vennum"></el-input>
            </el-form-item>
            <el-form-item label="用车人" prop="venversion">
              <el-input v-model="ruleForm1.venversion"></el-input>
            </el-form-item>
            <el-form-item label="处室司机" prop="seatnum">
              <el-input v-model="ruleForm1.seatnum"></el-input>
            </el-form-item>
            <el-form-item label="乘坐人数" prop="color">
              <el-input v-model="ruleForm1.color"></el-input>
            </el-form-item>
            <el-form-item label="目的地" prop="enginenum">
              <el-input v-model="ruleForm1.enginenum"></el-input>
            </el-form-item>
            <el-form-item label="用车时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm1.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm1.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="拟返回时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm1.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm1.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <br>
            <el-form-item label="夜间用车" prop="isscrap">
              <el-radio-group v-model="ruleForm1.isscrap">
                <el-radio label="否"></el-radio>
                <el-radio label="是"></el-radio>
              </el-radio-group>
            </el-form-item>
            <br>
            <el-form-item label="外阜用车" prop="isscrap">
              <el-radio-group v-model="ruleForm1.isscrap">
                <el-radio label="否"></el-radio>
                <el-radio label="是"></el-radio>
              </el-radio-group>
            </el-form-item>
            <br>
            <el-form-item label="需要司机" prop="isscrap">
              <el-radio-group v-model="ruleForm1.isscrap">
                <el-radio label="否"></el-radio>
                <el-radio label="是"></el-radio>
              </el-radio-group>
            </el-form-item>
            <br>
            <el-form-item label="用车事由" prop="remarks">
              <el-input type="textarea" v-model="ruleForm1.remarks"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
               <el-button @click="dialogVisible = false;resetForm1('ruleForm1')">取 消</el-button>
               <el-button type="success" @click="resetForm1('ruleForm1')">重置</el-button>
               <el-button type="primary" @click="submitForm1('ruleForm1')">确 定</el-button>
        </span>
        </el-dialog>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="managertable"
          border
          style="width: 100%">
          <el-table-column
            prop="status"
            label="状态"
            width="40">
            <template slot-scope="scope">
              <i class="el-icon-success " v-if="scope.row.status=='1'"></i>
              <i class="el-icon-info" v-else-if="scope.row.status=='0'"></i>
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
            prop="csspr"
            label="处室审批人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="apqk"
            label="安排情况"
          >
          </el-table-column>
          <el-table-column
            prop="sqsj"
            label="申请时间"
            >
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
        name: "Useinfo",
      data(){
          return{
            ruleForm1: {
              vennum: '',
              venversion: '',
              seatnum: '',
              color: '',
              enginenum: '',
              gasvol:'',
              vendif:'',
              venuse:'',
              policynum:'',
              framenum:'',
              cardnum:'',
              oils:'',
              date:'',
              supplier:'',
              weight:'',
              traval:'',
              isscrap:false,
              remarks:'',

            },
            rules1: {
              vennum: [
                { required: true, message: '请输入牌照号', trigger: 'blur' },
                { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              venversion: [
                { required: true, message: '请输入厂牌型号', trigger: 'change' }
              ],
              seatnum: [
                { required: true, message: '请输入座位数', trigger: 'change' }
              ],
              color: [
                { required: true, message: '请输入颜色', trigger: 'change' }
              ],
              enginenum: [
                { required: true, message: '请输入发动机号', trigger: 'change' }
              ],
              gasvol: [
                { required: true, message: '请输入排气量', trigger: 'change' }
              ],
              vendif: [
                { required: true, message: '请选择车辆分类', trigger: 'change' }
              ],
              venuse: [
                { required: true, message: '请选择车辆用途', trigger: 'change' }
              ],
              policynum: [
                { required: true, message: '请输入保险单号', trigger: 'change' }
              ],
              framenum: [
                { required: true, message: '请输入车架号', trigger: 'change' }
              ],
              cardnum: [
                { required: true, message: '请输入加油卡号', trigger: 'change' }
              ],
              oils: [
                { required: true, message: '请选择油品', trigger: 'change' }
              ],

              date: [
                { type: 'date', required: true, message: '请选择购置日期', trigger: 'change' }
              ],


            },
            managertable: [],
            pickerOptions1: {
              disabledDate(time) {

              },

            },
            value1:'',
            tableData: [{
              vehdif:'小轿车',
              keyong: this.enablexiaonum,
              yianpai: this.arrdanum,
              xianxing: this.limitxiaonum,
            }, {
              vehdif:'中型客车',
              keyong: this.enablezhongnum,
              yianpai: this.arrzhongnum,
              xianxing: this.limitzhongnum,
            }, {
              vehdif:'大型客车',
              keyong: this.enabledanum,
              yianpai: this.arrdanum,
              xianxing: this.limitdanum,
            }, ],
            usenum:'可用车辆',
            appnum:'已安排车辆',
            limitnum:'限行车辆',
            dialogVisible:false,

            pagecount:0,
            currentpage:1,
            currentvehnum:'',

          }
    },
    mounted:function () {
      this.applyTableInfo();
      this.handlePageSearch(1,10);
    },
    methods:{
      handleChangepage(val) {
        console.log(`当前页: ${val}`);
        this.currentpage = val;
        console.log("dangqianye",this.currentpage);
        this.handlePageSearch(this.currentpage,10);
      },
      applyTableInfo(){
        this.$ajax.get('/getVehNum').then((res)=>{
          if (res.data.status) {
            console.log(res.data);
            this.tableData[0].keyong = res.data.enablexiaonum;
            this.tableData[1].keyong = res.data.enablezhongnum;
            this.tableData[2].keyong = res.data.enabledanum;
            this.tableData[0].yianpai = res.data.arrxiaonum;
            this.tableData[1].yianpai = res.data.arrzhongnum;
            this.tableData[2].yianpai = res.data.arrdanum;
            this.tableData[0].xianxing = res.data.limitxiaonum;
            this.tableData[1].xianxing = res.data.limitzhongnum;
            this.tableData[2].xianxing = res.data.limitdanum;
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
      handlePageSearch(currentpage,limit){
        let param = new URLSearchParams();
        param.append("currentpage", currentpage);
        param.append("limit", limit);
        this.$ajax.post('/ycsqInfo',param).then((res)=>{
          if (res.data.status) {
            console.log(res.data),
              this.managertable = res.data.ycsqlist;
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
      handleChangepage(val) {
        console.log(`当前页: ${val}`);
        this.currentpage = val;
        console.log("dangqianye",this.currentpage);
        this.handlePageSearch(this.currentpage,10);
      },
      apply(){
            this.dialogVisible=true;
      },
      lastday(){
        this.value1 = new Date(this.value1.getTime()-3600*1000*24);
      },
      nextday(){
        this.value1 = new Date(this.value1.getTime()+3600*1000*24);
      },
      resetForm1(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.dialogVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
    }
</script>

<style scoped>

  .app-btn{
    margin-top: 40px;
  }
  .zongti{

    margin: 10px;
    height: auto;

  }
</style>
