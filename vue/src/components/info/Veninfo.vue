<template>
  <el-row>
    <el-row>
      <el-col :span="24" class="warp-breadcrum ">
       <el-breadcrumb separator="/" style="font-size: 20px">
         <el-breadcrumb-item :to="{ path: '/' }"><b>信息管理</b></el-breadcrumb-item>

         <el-breadcrumb-item>车辆信息</el-breadcrumb-item>
       </el-breadcrumb>
      </el-col>
    </el-row>
   <el-row class="fd-option">

     <el-col :span="24">
       牌照号：
       <el-autocomplete
         class="fd-search"
         v-model="state4"

         prefix-icon="el-icon-search"
         placeholder="请输入牌照号"
         clearable
       ></el-autocomplete>

       &nbsp;&nbsp;厂牌型号：
       <el-autocomplete
         v-model="state5"

         prefix-icon="el-icon-search"
         placeholder="请输入厂牌型号"
         clearable
       ></el-autocomplete>


         &nbsp;&nbsp;
       <el-button type="primary" icon="el-icon-search">查询</el-button>

       &nbsp;&nbsp;&nbsp;&nbsp;

       <el-button type="success" icon="el-icon-plus" @click="open3">添加车辆</el-button>
     </el-col>
   </el-row>
    <el-row class="fd-table">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="vehnum"
          label="牌照号"
          width="120">
        </el-table-column>
        <el-table-column
          property="vehversion"
          label="厂牌型号"
          width="120">
        </el-table-column>
        <el-table-column

          label="保养记录"
          width="120">
          <template slot-scope="scope" >
            <a @click="searchbao(scope.row.vehnum)" href="#">查看</a>
            <el-badge :value="scope.row.baocount" type="success"/>


          </template>
        </el-table-column>
        <el-table-column

            label="违章记录"
            width="120">
          <template slot-scope="scope" >
            <a @click="searchwei(scope.row.vehnum)" href="#">查看</a>
            <el-badge :value="scope.row.weicount" type="warning" />


          </template>
        </el-table-column>
        <el-table-column

          label="事故记录"
          width="120">
          <template slot-scope="scope" >
            <a @click="searchshi(scope.row.vehnum)" href="#">查看</a>
            <el-badge :value="scope.row.shicount" type="danger" />


          </template>
        </el-table-column>
        <el-table-column

          label="维修记录"
          width="120">
          <template slot-scope="scope" >
            <a @click="searchrep(scope.row.vehnum)" href="#">查看</a>
            <el-badge :value="scope.row.repcount" type="info" />


          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row);open1()">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row) ;open2()">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="修改车辆信息"
        :visible.sync="centerDialogVisible"
        width="50%"
        center>
        <el-form :model="ruleForm" :rules="rules" status-icon inline  ref="ruleForm" label-width="140px" size="small" class="demo-ruleForm">
          <el-form-item label="牌照号" prop="vehnum">
            <el-input v-model="ruleForm.vehnum" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="厂牌型号" prop="vehversion">
            <el-input v-model="ruleForm.vehversion"></el-input>
          </el-form-item>
          <el-form-item label="座位数" prop="seatsnum">
            <el-input v-model="ruleForm.seatsnum"></el-input>
          </el-form-item>
          <el-form-item label="颜色" prop="color">
            <el-input v-model="ruleForm.color"></el-input>
          </el-form-item>
          <el-form-item label="发动机号" prop="enginenum">
            <el-input v-model="ruleForm.enginenum"></el-input>
          </el-form-item>
          <el-form-item label="排气量" prop="gasvol">
            <el-input v-model="ruleForm.gasvol"></el-input>
          </el-form-item>
          <el-form-item label="保险单号" prop="policynum">
            <el-input v-model="ruleForm.policynum"></el-input>
          </el-form-item>
          <el-form-item label="车架号" prop="framenum">
            <el-input v-model="ruleForm.framenum"></el-input>
          </el-form-item>
          <el-form-item label="车辆用途" prop="venuse">
            <el-select v-model="ruleForm.vehusage" placeholder="请选择车辆用途">
              <el-option label="警务用车" value="警务用车"></el-option>
              <el-option label="领导用车" value="领导用车"></el-option>
              <el-option label="其他用车" value="其他用车"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="purdate" label="购置日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.purdate" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="使用油品" prop="oildif">
            <el-select v-model="ruleForm.oildif" placeholder="请选择油品">
              <el-option label="93#汽油" value="93#汽油"></el-option>
              <el-option label="97#汽油" value="97#汽油"></el-option>
              <el-option label="柴油" value="柴油"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆分类" prop="vehdif">
            <el-select v-model="ruleForm.vehdif" placeholder="请选择车辆分类">
              <el-option label="越野车" value="越野车"></el-option>
              <el-option label="吉普车" value="吉普车"></el-option>
              <el-option label="小轿车" value="小轿车"></el-option>
              <el-option label="小型客车" value="小型客车"></el-option>
              <el-option label="中型客车" value="中型客车"></el-option>
              <el-option label="大客车" value="大客车"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加油卡号" prop="oilcardnum">
            <el-input v-model="ruleForm.oilcardnum"></el-input>
          </el-form-item>
          <el-form-item label="供应商" prop="supplier">
            <el-input v-model="ruleForm.supplier"></el-input>
          </el-form-item>
          <el-form-item label="载重量（千克）" prop="weight">
            <el-input v-model="ruleForm.weight"></el-input>
          </el-form-item>
          <el-form-item label="行驶里程（公里）" prop="travel">
            <el-input v-model="ruleForm.travel"></el-input>
          </el-form-item>
          <el-form-item label="是否报废" prop="isscrap">
            <el-radio-group v-model="ruleForm.isscrap">
              <el-radio label="否"></el-radio>
              <el-radio label="是"></el-radio>
            </el-radio-group>
          </el-form-item>
          <br>
          <el-form-item label="备注" prop="remarks">
            <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
               <el-button @click="centerDialogVisible = false;resetForm('ruleForm')">取 消</el-button>
               <el-button type="success" @click="resetForm('ruleForm')">重置</el-button>
               <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="增加车辆信息"
        :visible.sync="centerDialogVisible1"

        width="50%"
        center>
        <el-form :model="ruleForm1" :rules="rules1" status-icon inline  ref="ruleForm1" label-width="140px" size="small" class="demo-ruleForm">
          <el-form-item label="牌照号" prop="vehnum">
            <el-input v-model="ruleForm1.vehnum"></el-input>
          </el-form-item>
          <el-form-item label="厂牌型号" prop="vehversion">
            <el-input v-model="ruleForm1.vehversion"></el-input>
          </el-form-item>
          <el-form-item label="座位数" prop="seatsnum">
            <el-input v-model="ruleForm1.seatsnum"></el-input>
          </el-form-item>
          <el-form-item label="颜色" prop="color">
            <el-input v-model="ruleForm1.color"></el-input>
          </el-form-item>
          <el-form-item label="发动机号" prop="enginenum">
            <el-input v-model="ruleForm1.enginenum"></el-input>
          </el-form-item>
          <el-form-item label="排气量" prop="gasvol">
            <el-input v-model="ruleForm1.gasvol"></el-input>
          </el-form-item>
          <el-form-item label="保险单号" prop="policynum">
            <el-input v-model="ruleForm1.policynum"></el-input>
          </el-form-item>
          <el-form-item label="车架号" prop="framenum">
            <el-input v-model="ruleForm1.framenum"></el-input>
          </el-form-item>
          <el-form-item label="车辆用途" prop="vehusage">
            <el-select v-model="ruleForm1.vehusage" placeholder="请选择车辆用途">
              <el-option label="警务用车" value="警务用车"></el-option>
              <el-option label="领导用车" value="领导用车"></el-option>
              <el-option label="其他用车" value="其他用车"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="purdate" label="购置日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm1.purdate" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="使用油品" prop="oildif">
            <el-select v-model="ruleForm1.oildif" placeholder="请选择油品">
              <el-option label="93#汽油" value="93#汽油"></el-option>
              <el-option label="97#汽油" value="97#汽油"></el-option>
              <el-option label="柴油" value="柴油"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆分类" prop="vehdif">
            <el-select v-model="ruleForm1.vehdif" placeholder="请选择车辆分类">
              <el-option label="越野车" value="越野车"></el-option>
              <el-option label="吉普车" value="吉普车"></el-option>
              <el-option label="小轿车" value="小轿车"></el-option>
              <el-option label="小型客车" value="小型客车"></el-option>
              <el-option label="中型客车" value="中型客车"></el-option>
              <el-option label="大客车" value="大客车"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加油卡号" prop="oilcardnum">
            <el-input v-model="ruleForm1.oilcardnum"></el-input>
          </el-form-item>
          <el-form-item label="供应商" prop="supplier">
            <el-input v-model="ruleForm1.supplier"></el-input>
          </el-form-item>
          <el-form-item label="载重量（千克）" prop="weight">
            <el-input v-model="ruleForm1.weight"></el-input>
          </el-form-item>
          <el-form-item label="行驶里程（公里）" prop="travel">
            <el-input v-model="ruleForm1.travel"></el-input>
          </el-form-item>
          <el-form-item label="是否报废" prop="isscrap">
            <el-radio-group v-model="ruleForm1.isscrap">
              <el-radio label="否"></el-radio>
              <el-radio label="是"></el-radio>
            </el-radio-group>
          </el-form-item>
          <br>
          <el-form-item label="备注" prop="remarks">
            <el-input type="textarea" v-model="ruleForm1.remarks"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
               <el-button @click="centerDialogVisible1 = false;resetForm1('ruleForm1')">取 消</el-button>
               <el-button type="success" @click="resetForm1('ruleForm1')">重置</el-button>
               <el-button type="primary" @click="submitForm1('ruleForm1')">确 定</el-button>
        </span>
      </el-dialog>
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
      name: "Veninfo",
      data(){
        return{
          ruleForm: {
            vehnum: '',
            vehversion: '',
            seatsnum: '',
            color: '',
            enginenum: '',
            gasvol:'',
            vehdif:'',
            vehusage:'',
            policynum:'',
            framenum:'',
            oilcardnum:'',
            oildif:'',
            purdate:'',
            supplier:'',
            weight:'',
            travel:'',
            isscrap:false,
            remarks:'',

          },
          ruleForm1: {
            vehnum: '',
            vehversion: '',
            seatsnum: '',
            color: '',
            enginenum: '',
            gasvol:'',
            vehdif:'',
            vehusage:'',
            policynum:'',
            framenum:'',
            oilcardnum:'',
            oildif:'',
            purdate:'',
            supplier:'',
            weight:'',
            travel:'',
            isscrap:false,
            remarks:'',

          },
          rules: {
            vehnum: [
              { required: true, message: '请输入牌照号', trigger: 'blur' },
              { min: 1, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            vehversion: [
              { required: true, message: '请输入厂牌型号', trigger: 'change' }
            ],
            seatsnum: [
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
            vehdif: [
              { required: true, message: '请选择车辆分类', trigger: 'change' }
            ],
            vehusage: [
              { required: true, message: '请选择车辆用途', trigger: 'change' }
            ],
            policynum: [
              { required: true, message: '请输入保险单号', trigger: 'change' }
            ],
            framenum: [
              { required: true, message: '请输入车架号', trigger: 'change' }
            ],
            oilcardnum: [
              { required: true, message: '请输入加油卡号', trigger: 'change' }
            ],
            oildif: [
              { required: true, message: '请选择油品', trigger: 'change' }
            ],

            purdate: [
              { type: 'date', required: true, message: '请选择购置日期', trigger: 'change' }
            ],


          },
          rules1: {
            vehnum: [
              { required: true, message: '请输入牌照号', trigger: 'blur' },
              { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            vehversion: [
              { required: true, message: '请输入厂牌型号', trigger: 'change' }
            ],
            seatsnum: [
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
            vehdif: [
              { required: true, message: '请选择车辆分类', trigger: 'change' }
            ],
            vehusage: [
              { required: true, message: '请选择车辆用途', trigger: 'change' }
            ],
            policynum: [
              { required: true, message: '请输入保险单号', trigger: 'change' }
            ],
            framenum: [
              { required: true, message: '请输入车架号', trigger: 'change' }
            ],
            oilcardnum: [
              { required: true, message: '请输入加油卡号', trigger: 'change' }
            ],
            oildif: [
              { required: true, message: '请选择油品', trigger: 'change' }
            ],

            purdate: [
              { type: 'date', required: true, message: '请选择购置日期', trigger: 'change' }
            ],


          },
          centerDialogVisible: false,
          centerDialogVisible1:false,
          tableData: [],
          currentRow:null,
          vehlist:'',
          state4:'',
          state5:'',
          pagecount:0,
          currentpage:1,
          currentvehnum:'',

        }


      },
      mounted:function () {

       this.handlePageSearch(1,10);

        },
      methods:{
        searchbao(vehnum){
          this.$router.push({path:'/baoinfo',query:{vehnum:vehnum}});
          console.log("vehnumzhiqian"+vehnum);
        },
        searchrep(vehnum){
          this.$router.push({path:'/repinfo',query:{vehnum:vehnum}});
          console.log("vehnumzhiqian"+vehnum);
        },
        searchshi(vehnum){
          this.$router.push({path:'/shiinfo',query:{vehnum:vehnum}});
          console.log("vehnumzhiqian"+vehnum);
        },
        searchwei(vehnum){
          this.$router.push({path:'/weiinfo',query:{vehnum:vehnum}});
          console.log("vehnumzhiqian"+vehnum);
        },
        handlePageSearch(currentpage,limit){
          let param = new URLSearchParams();
          param.append("currentpage", currentpage);
          param.append("limit", limit);
          this.$ajax.post('/vehInfo',param).then((res)=>{
            if (res.data.status) {
              console.log(res.data),
                this.tableData = res.data.vehlist;
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
        handleCurrentChange(val) {
          this.currentRow = val;
        },
        handleEdit(index, row) {
          //console.log(index, row);
          console.log(row.vehnum);
          this.ruleForm.vehnum = row.vehnum;
        },
        handleDelete(index, row) {
          console.log(index, row);
          this.currentvehnum = row.vehnum;
        },
        open2() {
          this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let param = new URLSearchParams();
            param.append("vehnum", this.currentvehnum);
            this.$ajax.post('/deleteVeh',param).then((res)=>{
              if (res.data.status) {
                console.log(res.data);
                this.$message({
                  type: 'success',
                  message: '删除成功!'
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

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        open1(){
          this.centerDialogVisible = true;

        },
        open3(){
          this.centerDialogVisible1 = true;
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(JSON.stringify(this.ruleForm));
              let param = new URLSearchParams();
              param.append("ruleForm", JSON.stringify(this.ruleForm));
              this.$ajax.post('/updateVeh',param).then((res)=>{
                if (res.data.status) {
                  console.log(res.data);

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
              this.$message({
                type: 'success',
                message: '修改成功',
                showClose: true
              })
              this.centerDialogVisible = false;
            } else {
              console.log('error submit!!');
              return false;
            }
          });

        },
        resetForm1(formName) {
          this.$refs[formName].resetFields();
        },
        submitForm1(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(JSON.stringify(this.ruleForm1));
              let param = new URLSearchParams();
              param.append("ruleForm1", JSON.stringify(this.ruleForm1));
              this.$ajax.post('/addVeh',param).then((res)=>{
                if (res.data.status) {
                  console.log(res.data);

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
              this.$message({
                type: 'success',
                message: '添加成功',
                showClose: true
              })
              this.centerDialogVisible1 = false;
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
.fd-option{
  margin:10px;
}
  .fd-table{
    margin: 10px;
  }
  .cell{
    height: 50px;
  }
</style>
