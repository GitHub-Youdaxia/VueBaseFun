<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      route: ''
    }
  },
  created () {

  },
  watch:{
    $route: {
      handler: function(val, oldVal){
        // console.log(val);
        this.route = val.name
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>

<style>
html,body {height: 100%;padding: 0;margin: 0;}
#app {
height: 100%;

}

/* display: grid;
grid-template-rows: 100px 1fr;
grid-template-columns: 200px 1fr; */
</style>
