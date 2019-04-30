<template lang="html">
  <div class="content">
    <div class="sidebar">
      this is sidethis is sidethis is side
    </div>
    <div class="booklist">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.sidebar{
    display: block;
    position: absolute;
    left: 200px;
    top: 60px;
    bottom:0;
    width: 300px;
    overflow-x: hidden;
    background-color: #ccc;
}
.booklist{
  margin: 10px;
  display: block;
  position: absolute;
  left: 500px;
  top: 60px;
  bottom:0;
  width: 500px;
  overflow-x: hidden;
  background-color: #fff;
}
.box-card {
    width: 250px;
  }
</style>
