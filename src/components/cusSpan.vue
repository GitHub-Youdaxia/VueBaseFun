<template>
  <span>
   {{text}}-{{text2}}
  </span>
</template>

<script>
export default {
  name: 'cusSpan',
  props: ['text'],
  data () {
    return {
      text2: this.text
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
