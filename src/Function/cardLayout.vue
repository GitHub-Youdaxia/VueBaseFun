<template>
	<div>

    <el-button @click="handclick" type="primary">不用$nextTick({{length1}}})</el-button>
    <el-button @click="handclick2" type="primary">用$nextTick({{length2}}})</el-button>
    <el-button @click="reset" type="primary">重置</el-button>
    <div v-if="flag">
      <div class="item-row" v-for="item in 10000" :key="'index'+item">{{item}}</div>
    </div>
	</div>
</template>

<script>

export default {
	name: "cardLayout",
	title: '$nextTick',
  data() {
    return {
      introduction: "",
      flag: false,
      length1: 0,
      length2: 0,
    };
  },
  created() {
		
	},
  methods: {
    reset(){
      this.flag=false
      this.length1 = 0
      this.length2 = 0
    },
		handclick(){
      this.flag = true
      this.length1 = document.querySelectorAll('.item-row').length
		},
		handclick2(){
      this.flag = true
      this.$nextTick(()=>{
        this.length2 = document.querySelectorAll('.item-row').length
      })
		},
	}
};
</script>

<style scoped>
.card-box {
  display: grid;
}
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 100px;
  }
  .des {
    width: 100px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;    
  }
</style>