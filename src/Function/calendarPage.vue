<template>
  <div>
    <div>
      <h3>控制当月1号所在行次</h3>
      <el-input-number v-model="moreBefore" size="normal" label=""
        :min="0" :max="3" :step="1" :controls="true" controls-position="both" @change="">
      </el-input-number>
      
    </div>
    <calendar v-model="data" :moreBefore="moreBefore">
      <template v-slot:default="{data}">
        <div>{{data.date.split('-')[2]}}</div>
      </template>
    </calendar>
  </div>
</template>

<script>

export default {
  name: "calendarPage",
  title: "自己写的日历插件",
  data() {
    return {
      data: new Date(),
      moreBefore: 0
    };
  },
  mounted () {
  },  
  methods: {
    handleBeforeChange() {
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
