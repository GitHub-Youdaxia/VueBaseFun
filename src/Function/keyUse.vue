<template>
  <div>
    <div class="box">
      <!-- <el-button type="primary" size="default" @click="resetArr">重新赋值</el-button>
      <el-button type="primary" size="default" @click="resetArr2">重新赋值2</el-button>
      <div class="item" v-for="(item, index) in arr" :key="index">
        <span>{{item.title}}</span>
        <user :user="item.user"></user>
        <span @click="arr.splice(index,1)"> 删除</span>
      </div>
      <hr>
      <Child v-for="(item, i) in array" :text="item" @delete="remove(i)" /> -->
    </div>
  </div>
</template>

<script>
let arr = [{title:'a', user:{name:'小明1'}},{title:'b', user:{name:'小明2'}},{title:'c', user:{name:'小明3'}},{title:'d', user:{name:'小明4'}},{title:'e', user:{name:'小明5'}}]
let arr2 = [{title:'a', user:{name:'小明6'}},{title:'b', user:{name:'小明7'}},{title:'c', user:{name:'小明8'}},{title:'d', user:{name:'小明9'}},{title:'e', user:{name:'小明10'}}]
export default {
  name: "keyUse",
  title: "key值作用",
  data() {
    return {
      arr: [...arr],
      array: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
      ],      
    };
  },
  mounted () {
    window.keyUse = this
    console.log(this);
  },  
  methods: {
    remove(i) {
      this.array.splice(i, 1);
    },    
    resetArr () {
      this.arr = [...arr]
    },
    resetArr2 () {
      this.arr = [...arr2]
    },
    handleBeforeChange() {
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
