<template lang="html">
  <div class="Header">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="10" :offset="2"><span style="font-size: 20px;" @click="goIndex"><a href="#">xx图书商城</a></span></el-col>
          <el-col :span="4" :offset="5">
            <el-input inline placeholder="搜索图书" v-model="searchkey" class="input">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-menu
              class="el-menu-demo"
              router
              mode="horizontal"
              background-color="#000"
              text-color="#fff"
              active-text-color="#fff">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-user-solid" style="font-size:25px;"></i></template>
                <el-menu-item index="/usercenter">我的订单</el-menu-item>
                <el-menu-item index="1-2">收货地址</el-menu-item>
                <hr style="width:90%;">
                <el-menu-item index="1-3">退出登录</el-menu-item>
              </el-submenu>
              <el-menu-item index="2" style="border-bottom-color:#000;"><i class="el-icon-shopping-cart-2" style="font-size:25px;"></i></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchkey: '',
    };
  },
  methods: {
    goIndex(){
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="css" scoped>
  .el-header, .el-footer {
    background-color: #000;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }
  .el-col{
    text-align: left;
  }
  .input{
    width: 200px;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #fff;
  }
</style>
