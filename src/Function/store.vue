<template>
	<div>
		<el-input v-model="introduction"></el-input>
		<el-button @click="setUserIntroduction">修改store里user的介绍</el-button>
	</div>
</template>

<script>
let id = 1000;

export default {
	name: "studyStore",
	title: '学习Store',
  data() {
    return {
      introduction: "",
      data: ""
    };
  },
  created() {
		
	},
  methods: {
		setUserIntroduction(){
			this.$store.dispatch('user/editIntroduction',this.introduction)
		}
	}
};
</script>

<style>
</style>