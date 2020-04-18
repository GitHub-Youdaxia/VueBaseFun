<template>
  <div>article</div>
</template>

<script>
import { fetchList } from "@/api/myStudy/article";
export default {
  name: "article",
  components: {},
  data() {
    return {
      msg: ""
    };
  },
  created() {
    fetchList()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  },
  mounted() {},
  methods: {
    say() {}
  },
  watch: {},
  filters: {}
};
</script>

<style lang="stylus" scoped></style>
