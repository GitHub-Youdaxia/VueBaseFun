<template>
  <div id="extend">
    Extend用法
  </div>
</template>

<script>
import Vue from 'vue'

const testComponent = Vue.extend({
  template: '<div>{{ text }}</div>',
  data: function () {
    return {
      text: 'extend test'
    }
  }
})
const extendComponent = new testComponent().$mount()
console.log(extendComponent)
export default {
  name: "vue.Extend用法",
  title: "vue.Extend用法",
  data() {
    return {
      ExSwitchFlag: true,
    };
  },
  mounted () {
    document.querySelector('#extend').append(extendComponent.$el)
  },  
  methods: {
    handleBeforeChange() {
    }
  }
};
</script>

<style scoped>

</style>