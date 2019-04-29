<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px;" class="login-box">
      <h2 class="login-title">歡迎登入</h2>
      <el-form-item label="帳號"  prop="username">
        <el-input type="text" placeholder="請輸入帳號" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input type="password" placeholder="請輸入密碼" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '請輸入帳號', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '請輸入密碼', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$router.push('/main');
          } else {
            this.$message({
              message: '請輸入帳號或密碼',
              type: 'warning'
            });
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #dcdfe6;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 0 25px #dcdfe6;
  }

  .login-title {
    text-align: center;
  }
</style>
