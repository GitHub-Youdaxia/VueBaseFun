<template>
  <div>
    <ExSwitch v-model="ExSwitchFlag" :beforeChange="handleBeforeChange"></ExSwitch>
  </div>
</template>

<script>
export default {
  name: "vueMixin",
  title: "扩展elementUI switch组件",
  data() {
    var checkaaa = (rule, value, callback) => {
      if (this.ruleForm.tagArr.length){
        callback();
      }
      callback(new Error("不通过"));
    };
    return {
      ExSwitchFlag: true,
    };
  },
  methods: {
    handleBeforeChange() {
      return this.$confirm('确定要切换吗？','提示')      
    }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>