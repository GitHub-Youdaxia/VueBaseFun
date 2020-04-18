<template>
  <div style="text-align:center">
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style>

</style>