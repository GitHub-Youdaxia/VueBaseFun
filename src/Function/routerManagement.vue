<template>
	<div>
		<el-button @click="addRoutes">添加路由菜单</el-button>
		<el-button @click="addRoutesDefine">添加路由定义(router.addRoutes(asyncRoutes))</el-button>
		<!-- <el-button @click="initRoutes">初始化路由</el-button> -->
	</div>
</template>

<script>
// export const asyncRoutes
import { asyncRoutes } from '@/router'
// export default router 默认导出的
import router from '@/router' 

export default {
	name: "routerManagement",
	title: '路由管理',
  data() {
    return {
      introduction: "",
      data: ""
    };
  },
  created() {
		
	},
  methods: {
		addRoutes(){
			this.$store.dispatch('permission/addRoutes')
		},
		addRoutesDefine(){
      router.addRoutes(asyncRoutes)
		},
		initRoutes(){
      this.$refs.store.dispatch('permission/initRoutes')
		}
	}
};
</script>

<style>
</style>