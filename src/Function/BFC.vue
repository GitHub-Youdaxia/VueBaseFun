<template>
  <div>
    <!-- <div>BFC的区域不会与float box重叠。</div> -->
    <div>{{text}}</div>
    <div class="test1">
      <div class="item1" >float区域</div>
      <div class="item2" >BFC区域</div>
    </div>
    <div class="box">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BFC",
  title: "BFC效果",
  data() {
    return {
      text: '',
      ExSwitchFlag: true,
    };
  },
  mounted () {
  },  
  methods: {
    handleBeforeChange() {
    }
  }
};
</script>

<style lang="stylus" scoped>
.test1{
  >div{
    height 100px
    border 1px solid
  }
  .item1{
    float left
    width 200px
  }
  .item2{
    overflow hidden
  }
}
  .box{
    overflow hidden
    background #CCC
    .item{
      height 100px
      border-bottom 1px
      margin-top 20px
    }
  }
</style>
