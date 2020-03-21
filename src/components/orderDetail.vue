
<template>
  <div class="main-box">
    工单详情
    <div v-for="(item,index) in arr" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetail',
  data () {
    return {
      arr: []
    }
  },
  methods:{
    orderProcess (event) {
      console.log(event.data.info)
      this.arr.push(event.data.info)
    }
  },
  created () {
    window.customEvent.addEvent("orderProcess", this.orderProcess); //添加事件
  },
  destroyed () {
    console.log('destroyed');
    window.customEvent.removeEvent("orderProcess",this.orderProcess)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello{
  border 1px solid $border1
}
</style>
