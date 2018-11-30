<template>
  <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>查询统计</b></el-breadcrumb-item>

        <el-breadcrumb-item>用车记录查询</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Recordsearch"
    }
</script>

<style scoped>

</style>
