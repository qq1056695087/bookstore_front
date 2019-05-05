<template lang="html">
  <el-card style="background-color:#84C1FF"class="box-card">
    <h2 style="color:black">用户登录</h2>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input style="width:250px;" v-model.number="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input style="width:250px;" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
  </el-form>
  </el-card>
</template>

<script>
  export default {
data() {
  var validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
      }
      callback();
    }
  };
  return {
    ruleForm: {
      pass: '',
      username:''
    },
    rules: {
      pass: [
        { validator: validatePass, trigger: 'blur' }
      ],
    }
  };
},
methods: {
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
}
}
</script>

<style lang="css" scoped>
.box-card {
      position: absolute;
      left: 36%;
      top:20%;
    width:400px;
  }
</style>
