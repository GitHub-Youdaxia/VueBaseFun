<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
        <el-tab-pane v-for="(item,index) in tabsData" :key="'index'+index" :label="item.title" :name="item.name">
          <!-- {{item.name}}
          {{item.title}} -->
          <component :is="item.name" v-if="item.name===activeName"></component>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
let option = {
    data() {
      return {
        activeName: 'second',
        tabsData: []
      };
    },
    created () {
      this.tabsData = functionDemo
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
  };
  console.log(option);
  export default option
</script>

<style>

</style>