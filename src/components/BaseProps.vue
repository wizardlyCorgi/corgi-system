<template>
  <div class="base-props">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'BaseProps',
  props: {
    msg: {
      type: String,
      //   required: true,
      default: '我是默认值'
    }
  }
}
</script>

<style></style>
