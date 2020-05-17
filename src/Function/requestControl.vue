<template>
  <div>
    <div>
      <el-button type="primary" @click="startRequest">开始请求</el-button>
      <el-switch v-model="requestSwitch.value" active-color="#13ce66" inactive-color="" active-text="开" inactive-text="关"></el-switch>
      请求个数<el-input-number v-model="requestNum" :min="100" :max="1000" label=""></el-input-number>
      并发数<el-input-number v-model="limit" :min="3" :max="20" label="">并发数</el-input-number>
    </div>
    <div>请求进度:{{resList.length}}/{{queryParams.length}}</div>
    <div>请求返回数据</div>
    <el-tag type="success" v-for="item in resList" :key="item">{{item}}</el-tag>
  </div>
</template>

<script>
// 主函数
function sendRequest(params, limit, fetch, hanleRes,requestSwitch) {
  // 定义递归
  function _send(params) {
    if (!params.length) {
      return;
    }
    if (!requestSwitch.value) {
      // 请求开关
      return
    }
    return fetch(params.shift())
      .then(res => {
        hanleRes(res);
      })
      .finally(() => {
        // 停止递归的条件
        if (params.length) {
          return _send(params);
        }
      });
  }
  let asyncList = [];
  // 调用5次递归
  while (limit--) {
    asyncList.push(_send(params));
  }
  return Promise.all(asyncList);
}
export default {
  name: "requestControl",
  title: "前端请求并发",
  data() {
    return {
      resList: [],
      limit: 10,
      requestNum: 100,
      requestSwitch: {value:true},
      queryParams: []
    };
  },
  created() {},
  methods: {
    hanleRes(res) {
      this.resList.push(res);
    },
    startRequest() {
      // 准备1000个请求
      let params = [];
      for (let index = 0; index < this.requestNum; index++) {
        params.push(index);
      }
      this.queryParams = JSON.parse(JSON.stringify(params));
      // 请求方法
      let requset = item => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(item);
          }, parseInt(Math.random() * 10) * 500);
        });
      };
      // 并发数量是5，同时最多有5个请求
      this.resList = []
      sendRequest(params, this.limit, requset, this.hanleRes, this.requestSwitch).then(res => {
        this.$message({message:'请求全部结束',type:'success'})
      });
    },
    setUserIntroduction() {}
  }
};
</script>

<style scoped>
</style>