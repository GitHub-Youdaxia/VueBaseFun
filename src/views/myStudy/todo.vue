<template>
  <div>
      todo
  </div>
</template>

<script>
export default {
  created () {
    this.EventBus.$on('test',function(data){
      // console.log(data);
    })
  }
}
</script>

<style>

</style>