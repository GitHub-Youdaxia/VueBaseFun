<template>
  <div>
    <fieldset>
      <legend>导航</legend>
      <div>
        <span class="cus-btn">导航<span class="bottom"></span></span>
      </div>
    </fieldset>
  </div>
</template>

<script>

export default {
  name: "css",
  title: "css写法",
  data() {
    return {
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
  .cus-btn{
    display inline-block
    width 200px
    height 50px
    line-height 50px
    text-align center
    border 1px solid #CCC
    position relative
    &:hover{
      .bottom{
        width 100%
      }
    }
    .bottom{
      transition width 1s
      position absolute
      left 50%
      bottom 0
      width 0
      height 2px
      background #000
      transform translateX(-50%)
    }
  }
</style>
