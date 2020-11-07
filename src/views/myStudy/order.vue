<template>
  <div class="main-box">
    工单列表页
    <button @click="$router.push({ path: '/orderDetail'})">跳转到详情</button>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteLeave (to, form, next) {
    this.$confirm('要跳转吗', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      next()
    }).catch(() => {

    })
  },
  beforeDestroy () {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello{
  border 1px solid $border1
}
</style>
