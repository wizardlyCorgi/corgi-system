<template>
  <div class="header">
    <el-header style="text-align:right; font-size: 14px ">
      <el-dropdown @command="logOut">
        <i
          class="el-icon-setting"
          style="margin-right: 15px;font-size: 20px"
        ></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">
            <i class="el-icon-user"></i>
            我的主页</el-dropdown-item
          >
          <el-dropdown-item command="b">
            <i class="el-icon-s-comment"> </i>
            留言与反馈</el-dropdown-item
          >
          <el-dropdown-item command="c">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 测试全局组件 -->
      <!-- <BaseComponent></BaseComponent> -->
      <span>Hi, 黑小虎</span>
    </el-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swtich: true
    }
  },
  methods: {
    logOut (command) {
      switch (command) {
        case 'a':
          console.log(1111)
          break
        case 'b':
          console.log(22)
          break
        case 'c':
          this.$router.push('/')
          break

        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #ebeef5;
  display: flex;
  // align-items: flex-end;
  justify-content: flex-end;
  //   background-color: #fff;

  /deep/.el-header {
    display: flex;
    align-items: center;
  }
}
</style>
