<template>
  <div class="login-page">
    <div class="logo">
      <h1 class="slogan">Welcome!</h1>
      <h1 class="slogan">欢迎来到英雄联盟,召唤师</h1>
    </div>
    <div class="login-form">
      <div class="title">账号登陆</div>
      <div class="form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="pass">
            <div class="item">
              <span class="el-icon-user"></span>
              <el-input
                type="text"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入手机号/邮箱"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="checkPass">
            <!-- <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input> -->
            <div class="item">
              <span class="el-icon-user"></span>
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入手机号/邮箱"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="age">
            <div class="code-item">
              <div class="item">
                <span class="el-icon-user"></span>
                <el-input
                  type="text"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="验证码"
                ></el-input>
              </div>
              <div class="code"></div>
            </div>
            <!-- <el-input v-model.number="ruleForm.age"></el-input> -->
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              style="width:100%"
              >登陆</el-button
            >
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <BaseComponent></BaseComponent> -->
    <!-- <BaseDialog></BaseDialog> -->
    <base-props></base-props>
  </div>
</template>

<script>
import BaseProps from '@/components/BaseProps'
export default {
  components: {
    BaseProps
  },
  data () {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      msg: '我是组件的值',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
  height: 937px;
  //   height: 100%;
  width: 100%;
  background-color: #688fb6;
  background: url('../../assets/images/poluo.jpg') no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15% 20%;
  box-sizing: border-box;
  .slogan {
    font-size: 30px;
    margin-bottom: 20px;
    font-family: serif;
  }
  .login-form {
    width: 500px;
    height: 600px;
    background-color: #666;
    // opacity: 0.2;
    background: rgba(73, 72, 72, 0.2);
    border-radius: 20px;
    padding: 60px 80px;
    box-sizing: border-box;
    .title {
      color: #fff;
      opacity: 0.5;
      text-align: center;
      font-size: 28px;
      margin-bottom: 20px;
    }
    .item {
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #fffff5;
      margin-bottom: 20px;
      .el-icon-user {
        font-size: 26px;
        color: #fffff5;
        // font-size: 600;
        // opacity: 0.5;
      }
    }
    .code-item {
      display: flex;
      //   align-items: center;
      margin-top: 20px;
      .code {
        width: 120px;
        height: 60px;
        background-color: red;
        margin-left: 5px;
        margin-top: -18px;
      }
    }

    /deep/.el-input__inner {
      border: 0; // 去除未选中状态边框
      outline: none; // 去除选中状态边框
      color: #fff;
    }
    /deep/input {
      background-color: rgba(0, 0, 0, 0); // 透明背景
      //   修改placeholder的样式
      &::-webkit-input-placeholder {
        color: #fff;
        opacity: 0.6;
      }
    }
  }
}
</style>
