<template>
  <div>
	<span>姓名：{{$store.state.user.name}}</span>
	<span>介绍：{{$store.state.user.introduction}}</span>
		<render style="float:right"></render>
  </div>
</template>

<script>
import render from '@/Layout/render';
export default {
		name: 'headerNav',
		components: { render },
		data () {
			return {

			}
		},
		created () {
			// console.log(this.$store.state.user.name);
			// console.log(customEvent);
			// 使用自定义事件对象触发事件
			setInterval(() => {
				window.customEvent.fireEvent({type:'orderProcess',data:{info:'快完成了'}})
				this.EventBus.$emit('test',{data:[]})
			}, 3000);
			// console.log();
		}
}

</script>

<style>

</style>