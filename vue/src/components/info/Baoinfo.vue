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

    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Baoinfo",
      data(){
          return{

          }
      },
      mounted:function () {
        var vehnum = this.$route.query.vehnum;
        console.log("vehnum:"+vehnum);
      }
    }
</script>

<style scoped>

</style>
