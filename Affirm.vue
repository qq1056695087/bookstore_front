<template lang="html">
  <div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">收货信息</span>
    </div>
    <el-row>
      <el-col :span="4">
        <el-card>
          <el-row>
            <el-button type="text" @click="dialogFormVisible = true" icon="el-icon-circle-plus" style="font-size:20px"></el-button>

<el-dialog title="添加新地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="收货人" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="收货地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="收货号码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</el-row>
<el-row>
  <div>使用新地址</div>
</el-row>
</el-card>
</el-col>
</el-row>
</el-card>
</br>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">购物清单</span>
    </div>
  <el-row>
  <el-col :span="13" :offset="2"><div class="grid-content bg-purple" style="float: left">商品信息</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light">单价</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">数量</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple">小计</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="3"><el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image></el-col>
    <el-col :span="8"><div style="float: left">book1</div></el-col>
    <el-col :span="3" :offset="4"><div>￥50</div></el-col>
    <el-col :span="3"><div>{{num}}</div></el-col>
    <el-col :span="3"><div>￥50</div></i></el-col>
  </el-row>
  <el-row>
    <el-col :span="3"><el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image></el-col>
    <el-col :span="8"><div style="float: left">book1</div></el-col>
    <el-col :span="3" :offset="4"><div>￥50</div></el-col>
    <el-col :span="3"><div>{{num}}</div></el-col>
    <el-col :span="3"><div>￥50</div></i></el-col>
  </el-row>
  <el-row>
  </br>
  </el-row>
  <el-row style="color:blue">
    <el-col :span="2" :offset="19"><div>应付总额(￥)：</div></el-col>
    <el-col :span="1"><div style="color:red;">{{num*price}}</div></el-col>
    <el-col :span="2"><el-button type="primary">提交订单</el-button></el-col>
  </el-row>
  </el-card>
</div>
</template>

<script>
  export default {
    data () {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        num:1,
        price:50,
       dialogTableVisible: false,
       dialogFormVisible: false,
       form: {
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: ''
       },
       formLabelWidth: '120px'
    }
  },
  methods: {
      handleChange(value) {
        console.log(value);
      },
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
