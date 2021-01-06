<template>
  <div>
	<span>姓名：{{$store.state.user.name}}</span>
	<span>介绍：{{$store.state.user.introduction}}</span>
	<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  迷你vuex的coute:{{count}}
</el-button>
<!-- <el-drawer
  title="我是标题"
  :visible.sync="drawer">
  <span>迷你vuex里的count:{{count}}</span>
</el-drawer> -->
  </div>
</template>

<script>
export default {
		name: 'headerNav',
		data () {
			return {
				drawer: false,
			}
		},
		computed: {
			count: {
				get () {
					return this.myState.count
				}
			}
		},
		created () {
			// console.log(this.$store.state.user.name);
			// console.log(customEvent);
			// 使用自定义事件对象触发事件
			// setInterval(() => {
			// 	window.customEvent.fireEvent({type:'orderProcess',data:{info:'快完成了'}})
			// 	this.EventBus.$emit('test',{data:[]})
			// }, 3000);
			// console.log();
		}
}

</script>

<style>

</style>