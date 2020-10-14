<template>
  <el-container class="home-container">
    <el-header>Header<el-button type="info" @click='logout'>退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">左边</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  // import {
  //   GoodsData
  // } from "network/home";

  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      logout() {
        window.sessionStorage.removeItem("token")
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #373d41;
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
  .home-container {
    height: 100%;
  }
</style>
