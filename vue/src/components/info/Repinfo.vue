<template>
  <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>信息管理</b></el-breadcrumb-item>

        <el-breadcrumb-item>维修信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Repinfo",
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
