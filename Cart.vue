<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">购物清单</span>
    </div>
  <el-row>
  <el-col :span="12" ><div class="grid-content bg-purple" style="float: left">商品信息</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">单价</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">数量</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">小计</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">操作</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="1"><el-checkbox></el-checkbox></el-col>
    <el-col :span="3"><el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image></el-col>
    <el-col :span="8"><div style="float: left">book1</div></el-col>
    <el-col :span="3"><div>￥50</div></el-col>
    <el-col :span="3"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="数量"></el-input-number></el-col>
    <el-col :span="3"><div>￥50</div></i></el-col>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </el-row>
  <el-row>
    <el-col :span="1"><el-checkbox></el-checkbox></el-col>
    <el-col :span="3"><el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image></el-col>
    <el-col :span="8"><div style="float: left">book1</div></el-col>
    <el-col :span="3"><div>￥50</div></el-col>
    <el-col :span="3"><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="数量"></el-input-number></el-col>
    <el-col :span="3"><div>￥50</div></i></el-col>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </el-row>
  <el-row>
  </br>
  </el-row>
  <el-row style="color:blue">
    <el-col :span="1"><el-checkbox></el-checkbox></el-col>
    <el-col :span="1"><div>全选</div></el-col>
    <el-col :span="2"><el-button type="primary">删除已选商品</el-button></el-col>
    <el-col :span="1" :offset="8"><div>已选择</div></el-col>
    <el-col :span="1"><div>{{num}}</div></el-col>
    <el-col :span="2"><div>件商品（共计</div></el-col>
    <el-col :span="1"><div>{{num}}</div></el-col>
    <el-col :span="1"><div>件商品）</div></el-col>
    <el-col :span="2"><div>应付总额(￥)：</div></el-col>
    <el-col :span="1"><div>{{num*price}}</div></el-col>
    <el-col :span="2"><el-button type="primary">现在结算</el-button></el-col>
  </el-row>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        num:1,
        price:50
    }
  },
  methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>

<style lang="css" scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
  }
</style>
