<template>
  <div class="base">
    <!-- 我是公共组件 -->
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  props: {
    msg: {
      type: String,
      default: '我是默认值'
      //   require: true
    }
  }
}
</script>

<style>
.base {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>
