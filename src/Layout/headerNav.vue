<template>
  <div>
      header
  </div>
</template>

<script>
export default {
		name: 'headerNav',
		data () {
			return {}
		},
		created () {
			// console.log(customEvent);
			setInterval(() => {
				window.customEvent.fireEvent({type:'orderProcess',data:{info:'快完成了'}})
			}, 3000);
		}
}
</script>

<style>

</style>