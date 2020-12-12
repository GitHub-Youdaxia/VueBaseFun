<template>
  <span>
    {{user.name}}
    <!-- <el-input v-model="x" placeholder="" size="normal" clearable @change=""></el-input>     -->
    -{{name2}}
  </span>
</template>

<script>
export default {
  name: 'user',
  props: ['user'],
  data () {
    return {
      x: 'aaa',
      name2: this.user.name
    }
  },
  created () {
      
  },
  watch:{
  }
}
</script>

<style>

</style>
